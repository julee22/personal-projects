
// VARIABLES
const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
// const classicLetters = ['A','B','C','D','E'];
let leftoverLetters;

const game = document.getElementById("game");
const gameEnding = document.getElementById("lose-screen");
const gameSettings = document.getElementById("settings-wrapper");

const letterList = document.getElementById("letters-list");
const layoutSetting = document.getElementById("layout-setting");

const selectedCategory = document.getElementById("category");
const categoriesSetting = document.getElementById("category-setting");
var showCategories = true;

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


// DOCUMENT SETUP
$(document).ready(function(){
  
  timerSetting.defaultValue = 10;

  generateCategory();
  generateGame();
  
  // console.log("on page load", maxTime);
  
});

// Game functions
function generateGame() {
  let n = 0;
  // console.log("generate time", maxTime);

  layout = layoutSetting.value;
  
  console.log("layout is ", layout);

  if (layout == 'circle') {
    game.classList = "circular";
  } else {
    game.classList = "grid";
  }


  while (n < classicLetters.length) {
    const letterWrapper = document.createElement("div");
    const letter = document.createElement("button");

    letterWrapper.classList.add('letter-wrapper');
    letterWrapper.setAttribute('style', rearrangeLetters(layout, n));

    letter.setAttribute('onclick','selectLetter(this, "' + classicLetters[n] + '")');
    letter.classList.add('letter');
    letter.innerText = classicLetters[n];

    letterWrapper.appendChild(letter);
    letterList.appendChild(letterWrapper);
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
  
  // console.log("Reset time", maxTime);
  
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

// Letters
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

function rearrangeLetters(layout, index) {
  switch (layout) {
    case 'circle':
      return calculateAngle(index);
      break;
    case 'grid':
      return "transform: rotate(0deg)";
    default:
      return "transform: rotate(0deg)";
      break;
  }
}

function calculateAngle(index) {
  var angle = 360 / classicLetters.length * index;
  console.log("calculate", angle);
  return "transform: rotate(" + angle + "deg)";
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
  showCategories = categoriesSetting.checked;
  showPlayer = playerSetting.checked;
  letterArrangement = layoutSetting.value;

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
