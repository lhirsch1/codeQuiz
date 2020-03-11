//app 
var secondsCounter = 10;
var score = 0;
var startBtn = document.querySelector('#btnStart');
var timeLeft = document.querySelector("#timeClock");
var decBtn  = document.querySelector("#decrement");
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
        text: 'Question 1',
        option1: 'hello',
        option2: 'hi',
        option3: 'howdy',
        option4: 'neato',
        correct: 'hi'
    },
    {
        text: 'Question 2',
        option1: 'hi',
        option2: 'boop',
        option3: 'hello',
        option4: 'df',
        correct: 'hi'
    },
    {
        text: 'Question 3',
        option1: 'yee',
        option2: 'boop',
        option3: 'hello',
        option4: 'df',
        correct: 'yee'
    },

    {
        text: 'Question 4',
        option1: 'hi',
        option2: 'boop',
        option3: 'hello',
        option4: 'df',
        correct: 'hi'
    },{
        text: 'Question 5',
        option1: 'hi',
        option2: 'boop',
        option3: 'hello',
        option4: 'df',
        correct: 'hi'
    }
    
];

//event listener for start button initiates countdown timer
startBtn.addEventListener("click", startQuiz);
resetButton.addEventListener('click', playAgain);
initialButton.addEventListener("click",postScore);


//helper function launches quiz game
function startQuiz(){
    startContainer.setAttribute('hidden', true);
    questionContainer.removeAttribute('hidden');
    countDownTimer();
    quizButtons();
}


function countDownTimer() {
    // Create the countdown timer.
    console.log("timer");

    var timerInterval = setInterval(function () {
        secondsCounter--;
        timeLeft.textContent = secondsCounter + " Seconds remaining";
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

function shuffleChoices(arr){
    arr.sort(() => Math.random()-0.5);

}

//function disables buttons when called
function freezeQuiz(){

    for(var ansbtn of answerBtns){
        ansbtn.setAttribute('disabled',true);
    }
    
}

var j = 0;
var correctAns;
function quizButtons(){
    if(secondsCounter > 0 && j < questions.length){
    var thisQuestion =  questions[j];
    var thisText    =   thisQuestion.text;
    var currentOpt1 =   thisQuestion.option1;
    var currentOpt2 =   thisQuestion.option2;
    var currentOpt3 =   thisQuestion.option3;
    var currentOpt4 =   thisQuestion.option4;
    correctAns  =   thisQuestion.correct;

    console.log(i + " i");
    console.log(j + " j")
    

    //make array of choices
    var choices = [currentOpt1, currentOpt2, currentOpt3, currentOpt4];
    //function randomizes order of array
    shuffleChoices(choices);


    //DOM manipulation to change question and answer choices
    questionText.innerHTML = "<h1>" +thisText+ "</h1>";
    ans1.textContent = choices[0];
    ans2.textContent = choices[1];
    ans3.textContent = choices[2];
    ans4.textContent = choices[3];

    

    //for in loop adds same event listener to 4 answer elements
    for(var ansbtn of answerBtns){
        ansbtn.addEventListener('click', answerFunction);
    }
    j++
}
else if(secondsCounter > 0 && j >= questions.length){
    console.log("end of quiz");
    console.log("final Score " + score);
    

}
else if(secondsCounter <= 0){
    console.log("out of time");
    console.log("final Score " + score);
}
}
    
    function answerFunction(){
        console.log(this);
        if(this.textContent === correctAns){
            score += 10;
            console.log("Correct!  Score " + i);  
            i++
            
            //calls quizButtons to generate new question
            quizButtons();
            
        }
        else if(this.textContent !== correctAns){
            console.log("WRONG! Question  Score " + i);
            

            decrementTimer();
            quizButtons();
        }   
    }
    
function scoreBoard(){

    
    // if(bestScore !== null){
    // topScore.innerHTML = topDog.inits + " Has The High Score Of " + bestScore + " Points";
    // }
    // else

    // yourScore.innerHTML = "You Scored " + score + " Points";
    
    
}

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
var thisScore = {};
var highCont = [];

function postScore(){
    thisScore.inits = initialsInput.value
    thisScore.score = score;
    
    
    if(score > bestScore){
        
        localStorage.setItem('user', window.JSON.stringify(thisScore));
        bestScore = topDog.score;
        topScore.innerHTML = "You set the new high score of " + bestScore + " points! Great job!";

    }
    else if(score<bestScore){
        topScore.innerHTML = topDog.inits + " Has The High Score Of " + bestScore + " Points";
        yourScore.innerHTML = thisScore.inits + ", your score of " + score + " is " + (bestScore-score) + " points away from the top";
    }
    else{
        localStorage.setItem('user', window.JSON.stringify(thisScore));
        bestScore = score
        topScore.innerHTML = "You set the new high score of " + bestScore + " points! Great job!";
    }

    
    
}

function playAgain(){
    score = 0;
    secondsCounter = 10;
    j = 0;
    for(var ansbtn of answerBtns){
        ansbtn.removeAttribute('disabled');
    }

    startQuiz();
}




