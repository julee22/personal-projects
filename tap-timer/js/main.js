// const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
const classicLetters = ['A','B','C','D','E'];
let leftoverLetters;

const gameEnding = document.getElementById("lose-screen");
const gameSettings = document.getElementById("settings-wrapper");

const letterList = document.getElementById("letters-list");

const selectedCategory = document.getElementById("category");
const categoriesSetting = document.getElementById("category-setting");
var showCategories = false;

const timerSetting = document.getElementById("timer-setting");
const timer = document.getElementById("timer");
var timerRef;
var maxTime = 5;

const playerSetting = document.getElementById("player-setting");
var showPlayer = false;
var currentPlayer;
const playerList = [{
  "name": String,
  "score": 0,
}];


$(document).ready(function(){
  
  timerSetting.defaultValue = 10;

  generateCategory();
  generateGame();
  
  console.log("on page load", maxTime);
  
});

// Game functions
function generateGame() {
  let n = 0;
  console.log("generate time", maxTime);
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

  return ;
}

function resetGame() {
  letterList.innerText = "";
  gameEnding.classList.add('hide');
  
  console.log("Reset time", maxTime);
  
  generateGame();
}

function newGame() {
  resetGame();

  if (showCategories) {
    generateCategory();
  } else {
    selectedCategory.innerHTML = "";
  }
}

function generateCategory() {
  let n = Math.floor(Math.random() * categories.length);
  selectedCategory.innerHTML = categories[n];
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
  
  clearInterval(timerRef);
  startTimer();
}

// Timer
function startTimer() {
  timer.innerHTML = maxTime;
  index = 1;
  timerRef = setInterval(function() {

    if (index == maxTime) {
      gameEnding.classList.remove('hide');
      timer.innerHTML = "0";
      clearInterval(timerRef);
    } else {
      // console.log(index, ' vs ', maxTime);
      timer.innerHTML = maxTime - index;
      index++;
    }
  }, 1000);
}

// Game Settings
function openGameSettings() {
  gameSettings.classList.toggle('hide');
}



function closeSettings() {
  gameSettings.classList.toggle('hide');
  var form = document.getElementById("settings");
  form.addEventListener('submit', handleForm);
}

function handleForm(event) { event.preventDefault(); } 

function saveSettings() {
  updateGameSettings();
  newGame();
  return closeSettings();
}


function updateGameSettings() {
  maxTime = timerSetting.value;
  showCategories = categoriesSetting.value;
  showPlayer = playerSetting.value;

  if (maxTime) {
    console.log("Time", maxTime);
  }
  if (showPlayer) {
    console.log("show players");
  }
  if (showCategories) {
    console.log("show categories");
  }
}
