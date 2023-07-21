var highScores = document.querySelector("#highscores");
var timerEl = document.querySelector(".time");
var startButton = document.querySelector(".start-button");
var title = document.querySelector(".coding-quiz")
var intro = document.querySelector(".intro")
var questionList = document.querySelector("#question");
var questionResult = document.querySelector("#results");
var submitButton = document.querySelector("#submit-btn");
var secondsLeft = "100";

//This array is what is used to call the questions, answer choices, and correct answers.
var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hypertext Makeup Language",
            "Hypertext Markup Language",
            "Hypertone Markdown Language",
            "Hypertiger Monkey Lion"
        ],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheet",
            "Cascading Super Sheet",
            "Cascade Style Shoe",
            "Cascading Style Sheets"
        ],
        correctAnswer: "1"
    },
    {
        question: "What HTML tag do you link the JavaScript in?",
        answers: [
            "<script>",
            "<header>",
            "<body>",
            "<h1>"
        ],
        correctAnswer: "1"
    },
    {
        question: "Where in the HTML do you link the CSS?",
        answers: [
            "The top of the <body> tag",
            "Inside the <p> tag",
            "The bottom of the <head> tag",
            "The <main> tag"
        ],
        correctAnswer: "3"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: [
            "String",
            "Boolean",
            "Number",
            "Alert"
        ],
        correctAnswer: "4"
    },
    {
        question: "What does the acronym DRY stand for?",
        answers: [
            "Don't Repeat Yourstyle",
            "Don't Repeat Yourself",
            "Don't Read Yourname",
            "Don't Repeat Yesterday"
        ],
        correctAnswer: "2"
    },
    {
        question: "Complete the following sentence: I am going to _____ the function in order for it to appear in the console.",
        answers: [
            "Draw",
            "Retype",
            "Recall",
            "Log"
        ],
        correctAnswer: "4"
    },
    {
        question: "Arrays are enclosed by ____",
        answers: [
            "Curly Braces",
            "Brackets",
            "Periods",
            "Backslashes"
        ],
        correctAnswer: "2"
    }
]

var questionIndex = 0;
var possibleAnswers = [];

function startQuiz(){
    startButton.style.display = "none"; //Removes the elements on the start page
    title.style.display = "none";
    intro.style.display = "none";


    questionIndex = questionIndex + 1 //Adds one to the questionIndex
    for (var i = 0; i < questions.length; i++) { //Calls the questions
        var currentQuestion = questions[i];
        questionList.textContent = currentQuestion.question;
        questionResult.innerHTML = '';
        console.log(questionIndex);

    for (var j = 0;  j < currentQuestion.answers.length; j++) {
        var listItem = document.createElement('li');
        var radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'choice-' + i;
        listItem.appendChild(radioButton);
        listItem.appendChild(document.createTextNode(currentQuestion.answers[j]));
        questionList.appendChild(listItem);
    }
}
}

startButton.addEventListener("click", function(){
    setTime();
    startQuiz();
  }
  )

console.log(startQuiz);

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--; //Decrementing the timer by 1
      timerEl.textContent = "Time: " + secondsLeft;
  //Adding text to the timer element to say the text in the quotes + the variable for the amount of time that is left
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
        console.log(secondsLeft);
      }
  
    }, 1000);
  }