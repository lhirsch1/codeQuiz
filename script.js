//app 
var secondsCounter = 60;
var score = 0;
var startBtn = document.querySelector("#btnStart");
var timeLeft = document.querySelector("#timeClock");
var decBtn  = document.querySelector("#decrement");
var questionText = document.querySelector("#questionText");
var i = 0;

//selects question text holder
var questionText = document.querySelector('#questionText');
//selectors for answer boxes
var ans1 = document.querySelector('#ans1');
var ans2 = document.querySelector('#ans2');
var ans3 = document.querySelector('#ans3');
var ans4 = document.querySelector('#ans4');

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
        text: 'Howdy partner',
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '4',
        correct: '1'
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
        text: 'How many words are in javascript',
        option1: 'hello',
        option2: 'hi',
        option3: 'howdy',
        option4: 'neato',
        correct: 'hi'
    }
];

//event listener for start button initiates countdown timer
startBtn.addEventListener("click", countDownTimer);


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

function shuffleChoices(arr){
    arr.sort(() => Math.random()-0.5);

}




function showQuestion() {

    var thisQuestion =  questions[i];
    var thisText    =   thisQuestion.text;
    var currentOpt1 =   thisQuestion.option1;
    var currentOpt2 =   thisQuestion.option2;
    var currentOpt3 =   thisQuestion.option3;
    var currentOpt4 =   thisQuestion.option4;
    var correctAns  =   thisQuestion.correct;
    console.log(" show question function ", thisText, currentOpt1,currentOpt2,currentOpt3,currentOpt4);

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

    var answerBtns = document.querySelectorAll(".ans");

    //for in loop adds same event listener to 4 answer elements
    for(var ansbtn of answerBtns){
        ansbtn.addEventListener('click', answerFunction);
    }

    //function handles if user's choice is correct or not
    function answerFunction(){
        if(this.textContent === correctAns){
            console.log("nice!");  
            score += 10;
            i++
            console.log("score : ", score);
            setTimeout(showQuestion, 500);
        }
        else{
            console.log("WRONG!");
            i++;
            setTimeout(showQuestion, 500);
        }
    }
}








//timer 

    //endquiz when 0


//score
    //initialize score at 0 in localstorage


//questions
    
    //determine whether user is right or wrong
    //if right:
        //display correct
        //add point to score in localstorage
        //advance quiz question done
    //if wrong
        //display incorrect
        //take 5 seconds off timer done
        //advance quiz question done

    //if no more questions end quiz

    //score
    //display when done
    //prompt user for initials
    //save input and score in local storage
    //display top score




