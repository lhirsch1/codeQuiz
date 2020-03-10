//app 
var secondsCounter = 60;
var startBtn = document.querySelector("#btnStart");
var timeLeft = document.querySelector("#timeClock");
var decBtn = document.querySelector("#decrement");
var questionText = document.querySelector("#questionText");
var i = 0;

//create an object array of questions
var questions = [
    {
        text: 'How many words are in javascript',
        correct: '1',
        wrong1: '2',
        wrong2: '3',
        wrong3: '4'
    },
    {
        text: 'Howdy partner',
        correct: '5',
        wrong1: '3',
        wrong2: '1',
        wrong3: '34'
    },
    {
        text: 'How are ya?',
        correct: '5',
        wrong1: '3',
        wrong2: '1',
        wrong3: '34'
    },
    {
        text: 'How many words are in javascript',
        correct: '5',
        wrong1: 'meow',
        wrong2: '1',
        wrong3: '34'
    },
    {
        text: 'How are ya?',
        correct: '5',
        wrong1: 'p good',
        wrong2: '1',
        wrong3: '34'
    },
    {
        text: 'How are ya?',
        correct: '5',
        wrong1: '3',
        wrong2: '1',
        wrong3: '34'
    }
];




startBtn.addEventListener("click", countDownTimer);
decBtn.addEventListener("click", decrementTimer);

function countDownTimer() {
    // Create the countdown timer.
    var timerInterval = setInterval(function () {
        secondsCounter--;
        timeLeft.textContent = secondsCounter + " Seconds remaining";
        if (secondsCounter === 0) {
            clearInterval(timerInterval);
            console.log("")
        }
    }, 1000);
    showQuestion();
}

//function to decrement timer if question is wrong
function decrementTimer() {
    secondsCounter = secondsCounter - 5;
}

var questionText = document.querySelector('#questionText');
var ans1 = document.querySelector('#ans1');
var ans2 = document.querySelector('#ans2');
var ans3 = document.querySelector('#ans3');
var ans4 = document.querySelector('#ans4');


function showQuestion() {

    var thisQuestion = questions[i];
   
    var thisText = thisQuestion.text;
    var thisCorrect = thisQuestion.correct;
    var thisWrong1 = thisQuestion.wrong1;
    var thisWrong2 = thisQuestion.wrong2;
    var thisWrong3 = thisQuestion.wrong3;
    console.log(" show question function ", thisText, thisCorrect);

    //make array of choices
    var choices = [thisCorrect, thisWrong1, thisWrong2, thisWrong3];
    

    function shuffleChoices(arr){
        arr.sort(() => Math.random()-0.5);

    }
    shuffleChoices(choices);
    console.log("choice 0 ", choices[0])

    questionText.innerHTML = "<h1>" +thisText+ "</h1>";
    ans1.innerHTML = "<h2 class='ans'>" +choices[0]+ "</h2>";
    ans2.innerHTML = "<h2 class='ans'>" +choices[1]+ "</h2>";
    ans3.innerHTML = "<h2 class='ans'>" +choices[2]+ "</h2>";
    ans4.innerHTML = "<h2 class='ans'>" +choices[3]+ "</h2>";

    var answerTags = document.querySelector(".ans");
    answerTags.addEventListener("click", answerFunction);
    function answerFunction(){
        console.log("answer  " ,this);
    }

    //if statement to get answer
        //if correct = show question 
        //if false = decrement time and show question
        //if choices[0] text === thisCorrect

    console.log(thisQuestion.text);
    i++;




}








//timer 
    //entire quiz
    //set timer counter to 60, ever second decrement by one
    //global variable for counter
    //when starting quiz set to time limit


//score
    //initialize score at 0 in localstorage


//questions
    //DOM to create elements
    //append question and answers to framework
    //determine whether user is right or wrong
    //if right:
        //display correct
        //add point to score in localstorage
        //advance quiz question
    //if wrong
        //display incorrect
        //take 5 seconds off timer
        //advance quiz question




//enter intials