// const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
const classicLetters = ['A','B','C'];
let leftoverLetters;

const gameEnding = document.getElementById("lose-screen");

const letterList = document.getElementById("letters-list");
const timer = document.getElementById("timer");
let maxTime = 5;

var x;

$(document).ready(function(){

  $("button").click(function(){
  });

  generateGame();
  console.log(categories.length);
  
});

// Game functions
function generateGame() {
  let n = 0;
  while (n < classicLetters.length) {
    const letter = document.createElement("button");
    letter.setAttribute('onclick','selectLetter(this, "' + classicLetters[n] + '")');
    letter.classList.add('letter');
    letter.innerText = classicLetters[n];
    letterList.appendChild(letter);
    n++;
  }
  gameEnding.classList.add('hide');
  leftoverLetters = classicLetters.slice();
  timer.innerHTML = maxTime;
}

function resetGame() {
  letterList.innerText = "";
  gameEnding.classList.add('hide');

  return generateGame();
}

function selectLetter(elem, letter) {
  elem.classList.add('selected');
  elem.setAttribute('disabled', 'true');

  let n = leftoverLetters.indexOf(letter);
  if (n > -1) {
    leftoverLetters.splice(n, 1);
  }

  if (leftoverLetters.length == 0) {
    resetGame();
  }
  
  clearInterval(x);
  startTimer();
}

// Timer
function startTimer() {
  timer.innerHTML = maxTime;
  index = 1;
  x = setInterval(function() {

    if (index == maxTime) {
      gameEnding.classList.remove('hide');
      timer.innerHTML = "0";
      clearInterval(x);
    } else {
      // console.log(index, ' vs ', maxTime);
      timer.innerHTML = maxTime - index;
      index++;
    }
  }, 1000);
}

function restartTimer() {

}

// Game Settings
function openGameSettings() {
  $("#settings").classList.toggle('open');
}

function updateGameSettings() {

}
