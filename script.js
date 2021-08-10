var timerEl = document.getElementById('clock');
var mainEl = document.getElementById('');
var buttonEl = document.getElementById('start-btn')

//timer variables
var timeLeft = 120;
var countDown;

//start quiz fc
function startQuiz() {
countDown = setInterval(countdown,1000)




}

function countdown() {
  
  timeLeft--;
  timerEl.textContent = timeLeft 

  if (timeLeft <= 0) {
    stopQuiz();

  }

  
}

function stopQuiz() {
clearInterval(timeLeft);


} 

buttonEl.onclick = startQuiz();
