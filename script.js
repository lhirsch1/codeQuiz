//app 
var secondsCounter = 25;
var score = 0;
var startBtn = document.querySelector('#btnStart');
var timeLeft = document.querySelector("#timeClock");
var decBtn = document.querySelector("#decrement");
var questionText = document.querySelector("#questionText");
var questionContainer = document.querySelector("#questionContainer");
var scoreContainer = document.querySelector("#scoreboard");
var startContainer = document.querySelector("#start");
var topScore = document.querySelector("#topDog");
var yourScore = document.querySelector("#yourScore");

var i = 0;

//selects question text holder
var questionText = document.querySelector('#questionText');

//selects answer option boxes
var answerBtns = document.querySelectorAll(".ans");

var initialsInput = document.querySelector('#userInitials');
var initialButton = document.querySelector('#initialButton');


var resetButton = document.querySelector('#reset');

//gets top user score
var topDog = JSON.parse(window.localStorage.getItem('user'));
var bestScore;


//create an object array of questions
var questions = [
    {
        text: 'What Does DOM Stand for?',
        option1: 'Document Object Model',
        option2: 'Do our Mowing',
        option3: 'Dont omit message',
        option4: 'Donut on Monday',
        correct: 'Document Object Model'
    },
    {
        text: 'What is a method?',
        option1: 'a skateboard trick',
        option2: 'function in an object',
        option3: 'a way to do something',
        option4: 'a variable',
        correct: 'function in an object'
    },
    {
        text: 'Is Java the same thing as JavaScript?',
        option1: 'No',
        option2: 'Yes',
        option3: 'Maybe',
        option4: 'Sometimes',
        correct: 'Yes'
    },

    {
        text: 'What does CSS stand for?',
        option1: 'Cascading style sheet',
        option2: 'cat surf sand',
        option3: 'clip shoe sandal',
        option4: 'corn slap soup',
        correct: 'Cascading style sheet'
    }, {
        text: 'What does HTML stand for?',
        option1: 'Hyper Text Markup Language',
        option2: 'hello to my llama',
        option3: 'hi to my llamas',
        option4: 'hope to miss lent',
        correct: 'Hyper Text Markup Language'
    }

];

//event listener for start button initiates countdown timer
startBtn.addEventListener("click", startQuiz);
resetButton.addEventListener('click', playAgain);
initialButton.addEventListener("click", postScore);


//helper function launches quiz game
function startQuiz() {
    startContainer.setAttribute('hidden', true);
    questionContainer.removeAttribute('hidden');
    countDownTimer();
    quizButtons();
}


function countDownTimer() {
    // Create the countdown timer.
    console.log("timer");

    //this code is executed every 1000 milliseconds
    var timerInterval = setInterval(function () {
        //decrements secound counter
        secondsCounter--;
        //updates DOM
        timeLeft.textContent = secondsCounter + " Seconds remaining";
        //when timer is done clears interval, notifies user, freezes quiz and initiates scoreboard
        if (secondsCounter <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's up!";
            scoreContainer.removeAttribute('hidden');
            freezeQuiz();
            scoreBoard();
        }
    }, 1000);

}

//function to decrement timer if question is wrong
function decrementTimer() {
    secondsCounter = secondsCounter - 5;
}

//this randomizes the answer options
function shuffleChoices(arr) {
    arr.sort(() => Math.random() - 0.5);

}

//function disables buttons when called
function freezeQuiz() {

    for (var ansbtn of answerBtns) {
        ansbtn.setAttribute('disabled', true);
    }

}


var j = 0;
var correctAns;
//function for c
function quizButtons() {
    //if statement for apending new question and answers 
    //if there are still questions left and the counter is still active this will be executed
    if (secondsCounter > 0 && j < questions.length) {
        var thisQuestion = questions[j];
        var thisText = thisQuestion.text;
        var currentOpt1 = thisQuestion.option1;
        var currentOpt2 = thisQuestion.option2;
        var currentOpt3 = thisQuestion.option3;
        var currentOpt4 = thisQuestion.option4;
        correctAns = thisQuestion.correct;

        console.log(i + " i");
        console.log(j + " j")


        //make array of choices
        var choices = [currentOpt1, currentOpt2, currentOpt3, currentOpt4];
        //function randomizes order of array
        shuffleChoices(choices);


        //DOM manipulation to change question and answer choices
        questionText.innerHTML = "<h1>" + thisText + "</h1>";
        ans1.textContent = choices[0];
        ans2.textContent = choices[1];
        ans3.textContent = choices[2];
        ans4.textContent = choices[3];



        //for in loop adds same event listener to 4 answer elements
        for (var ansbtn of answerBtns) {
            ansbtn.addEventListener('click', answerFunction);
        }
        //increments and goes to next question
        j++
    }
    //if user answers all questions, timer ends and moves to scoreboard
    else if (secondsCounter > 0 && j >= questions.length) {
        secondsCounter = 0;
        scoreBoard();


    }
}

//this function handles the answering of questions
function answerFunction() {
    //comparing text content of answer button to correct answer from questions object array
    if (this.textContent === correctAns) {
        //increments score
        score += 10;

        //calls quizButtons to generate new question
        quizButtons();

    }
    //if false, penalizes user and generates new question
    else if (this.textContent !== correctAns) {
        decrementTimer();
        quizButtons();
    }
}

//scoreboard hides question container and displays feedback
function scoreBoard() {

    questionContainer.setAttribute('hidden', true);
    yourScore.innerHTML = "You scored " + score + " points! <br> Please enter your initials";


}

//variables for json array
var thisScore = {};
var highCont = [];

//function compares current score to top score and updates top score if beaten
function postScore() {
    //setting values for DOM manipulation and JSON
    thisScore.inits = initialsInput.value
    thisScore.score = score;


    if (score > bestScore) {
        //sends user info to local storage as a stringified object element
        localStorage.setItem('user', window.JSON.stringify(thisScore));
        bestScore = thisScore.score;
        //user feedback
        topScore.innerHTML = "You set the new high score of " + bestScore + " points! Great job!";
        yourScore.innerHTML = "Move over " + topDog.inits + " , ya chump";

    }
    else if (score < bestScore) {
        topScore.innerHTML = topDog.inits + " Has The High Score Of " + bestScore + " Points";
        yourScore.innerHTML = thisScore.inits + ", your score of " + score + " is " + (bestScore - score) + " points away from the top";
    }
    else {
        //if this is the first play, sets user info to top of scoreboard
        localStorage.setItem('user', window.JSON.stringify(thisScore));
        bestScore = score
        topScore.innerHTML = "You set the new high score of " + bestScore + " points! Great job!";
        yourScore.innerHTML = "";
    }
}

//playagain resets some variables and preps app to relaunch without reloading page
function playAgain() {
    score = 0;
    secondsCounter = 25;
    j = 0;

    startContainer.setAttribute('hidden', true);
    questionContainer.removeAttribute('hidden');
    scoreContainer.setAttribute('hidden', true);

    for (var ansbtn of answerBtns) {
        ansbtn.removeAttribute('disabled');
    }

    startQuiz();
}




