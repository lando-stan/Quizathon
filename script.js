var topscore = document.querySelector("#topscore-button");
var header = document.querySelector("header");
var timerEl = document.getElementById("clock");
var mainEl = document.getElementById("");
var buttonEl = document.getElementById("start-btn");
var main = document.querySelector("#start_text");
var button1 = document.querySelector("#btn-1");
var button2 = document.querySelector("#btn-2");
var button3 = document.querySelector("#btn-3");
var quiz = document.querySelector(".quiz");
var questionEl = document.querySelector("#question1");
var questionEl2 = document.querySelector("#question2");
var questionEl3 = document.querySelector("#question3");

var questions = [
  {
    quote: "What is the syntax to print code on the console?",
    choices: "console.log(), console.hog() ...",
    answer: "console.log()",
  },

  {
    quote: "How many moons does the Earth have?",
    choices: "26, 1 , none",
    answer: "1",
  },
  {
    quote: "What time is class?",
    choices: "8:45 a.m, 8:45 p.m",
    answer: "8:45 a.m",
  },
];

//timer variables
var timeLeft = 120;
var countDown;

//start quiz fc
function startQuiz() {
  header.setAttribute("style", "justify-content: flex-end");
  topscore.setAttribute("style", "display:none");
  main.setAttribute("style", "display:none");
  // b.setAttribute("style", "display:flex");

  // before we set the quiz to be visible
  // we need to say what the question will be.

  // we can get these questions from our question variable that is an array of objects
  var question1 = `${questions[0].quote}`;
  var question2 = `${questions[1].quote}`;
  var question3 = `${questions[2].quote}`;

  //choices
  var choice1 = `${questions[0].choice}`;
  var choice2 = `${questions[1].choice}`;
  var choice3 = `${questions[2].choice}`;

  //answers
  var answer1 = `${questions[0].answer}`;
  var answer2 = `${questions[1].answer}`;
  var answer3 = `${questions[2].answer}`;

  console.log(question1);
  console.log(questionEl.innerText);

  //how to put the question from vs code to the live browser
  questionEl.innerText = question1;
  questionEl2.innerText = question2;
  questionEl3.innerText = question3;

  //how to put the choices from vs code to the live browser
  questionEl.innerText = question3;
  /*questionEl.innerText = question3;
  questionEl.innerText = question3;

  //how to put the answers from vs code to the live browser
  questionEl.innerText = question3;
  questionEl.innerText = question3;
  questionEl.innerText = question3;

  quiz.setAttribute("style", "display:visible");
  //headers.setAttribute("style", "display:none");*/
  //countDown = setInterval(countdown, 1000);
  countdown();
}

//SEtting countdown
function countdown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      stopQuiz();
    }
    //stopQuiz fc
    function stopQuiz() {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Button functionality
buttonEl.addEventListener("click", function () {
  startQuiz();
});

//set attribute : to set attribute to run attribute
