//app 
var secondsCounter = 6;
var startBtn = document.querySelector("#btnStart");
var timeLeft = document.querySelector("#timeClock");
var decBtn = document.querySelector("#decrement");
var questionText = document.querySelector("#questionText");
var i = 0;

//create an object array of questions
var questions = [
    {
        text: 'How many words are in javascript',
        option1: 'hello',
        option2: 'hi',
        option3: 'howdy',
        option4: 'neato',
        correct: 'hi'
    },
    {
        text: 'Howdy partner',
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '4',
        correct: '1'
    },
    {
        text: 'How are ya?',
        correct: '1',
        wrong1: '2',
        wrong2: '3',
        wrong3: '4'
    },
    {
        text: 'How many words are in javascript',
        correct: '1',
        wrong1: '2',
        wrong2: '3',
        wrong3: '4'
    },
    {
        text: 'How are ya?',
        correct: '1',
        wrong1: '2',
        wrong2: '3',
        wrong3: '4'
    },
    {
        text: 'How are ya?',
        correct: '1',
        wrong1: '2',
        wrong2: '3',
        wrong3: '4'
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
    var currentOpt1 = thisQuestion.option1;
    var currentOpt2 = thisQuestion.option2;
    var currentOpt3 = thisQuestion.option3;
    var currentOpt4 = thisQuestion.option4;
    var correctAns = thisQuestion.correct;
    console.log(" show question function ", thisText, currentOpt1,currentOpt2,currentOpt3,currentOpt4);

    //make array of choices
    var choices = [currentOpt1, currentOpt2, currentOpt3, currentOpt4];
    

    function shuffleChoices(arr){
        arr.sort(() => Math.random()-0.5);

    }
    shuffleChoices(choices);
    console.log("choice 0 ", choices[0])

    questionText.innerHTML = "<h1>" +thisText+ "</h1>";
    ans1.textContent = choices[0];
    ans2.textContent = choices[1];
    ans3.textContent = choices[2];
    ans4.textContent = choices[3];

    var answerBtns = document.querySelectorAll(".ans");
    for(var ansbtn of answerBtns){
        console.log("hi");
        ansbtn.addEventListener('click', answerFunction);
    }

    function answerFunction(){
        if(this.textContent){


        };
    }
    // answerDiv.addEventListener("click", answerFunction);
    // function answerFunction(){
    //     console.log("answer  ", this);
    // }

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