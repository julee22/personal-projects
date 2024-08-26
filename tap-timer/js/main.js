
// VARIABLES
const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
// const classicLetters = ['A','B','C','D','E'];
let leftoverLetters;

const game = document.getElementById("game");
const gameEnding = document.getElementById("lose-screen");
const gameSettings = document.getElementById("settings-wrapper");

const letterList = document.getElementById("letters-list");
const layoutSetting = document.getElementById("layout-setting");
var letterArrangement = "";

const selectedCategory = document.getElementById("category");
const categoriesSetting = document.getElementById("category-setting");
var showCategories = true;

const timerSetting = document.getElementById("timer-setting");
const timer = document.getElementById("timer");
var timerRef;
var maxTime = 5;

const trackPlayers = document.getElementById("track-players");
const playerSetting = document.getElementById("players-setting");
const numOfPlayers = document.getElementById("number-players");
const playerList = document.getElementById("players-list");
const players = document.getElementById("players");
var showPlayers = false;
var currentPlayer;
var listOfPlayers = [];
var tempListOfPlayers = [];

// DOCUMENT SETUP
$(document).ready(function(){
  
  timerSetting.defaultValue = 10;
  trackPlayers.checked = showPlayers;
  categoriesSetting.checked = showCategories;

  generateCategory();
  generateGame();

  trackPlayers.addEventListener("click", function (e) {
    showPlayers = trackPlayers.checked;
    numOfPlayers.value = 2;
    updateListOfPlayers();
    for (let index = 1; index <= numOfPlayers.value; index++) {
      generatePlayerInput(index);
    }
  });

  numOfPlayers.addEventListener("click", function (e) {
    updateListOfPlayers();
  });
  
});

// Game functions
function generateGame() {
  let n = 0;

  layout = layoutSetting.value;

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
  
  generateGame();
}

function newGame() {
  resetGame();

  if (showCategories) {
    generateCategory();
  } else {
    selectedCategory.innerHTML = "";
  }

  if (showPlayers) {
    players.innerHTML = "";
    generatePlayers();
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
      timer.innerHTML = maxTime - index;
      index++;
    }
  }, 1000);
}

// Players
function generatePlayerInput() {
  playerList.innerHTML = "";
  
  for (let index = 0; index < tempListOfPlayers.length; index++) {
    const playerLabel = document.createElement("label");
    const playerInput = document.createElement("input");

    playerLabel.setAttribute('for','player-'+ index);
    playerLabel.innerHTML = 'Player ' + index;

    playerInput.setAttribute('id','player-'+ index);
    playerInput.setAttribute('class','player-input');
    playerInput.setAttribute('type','text');
    playerInput.setAttribute('name', 'player-'+ index);
    playerInput.setAttribute('required', true);
    playerInput.setAttribute('minlength',"1");
    playerInput.setAttribute('value', tempListOfPlayers[index].name)
    
    playerList.appendChild(playerLabel);
    playerList.appendChild(playerInput);
  }
}

function updateListOfPlayers() {
  console.log("tracking players?", showPlayers, numOfPlayers.value);

  if (showPlayers) {
    playerSetting.classList.remove('hide');
    var tmpObject = {};

    for (let index = 0; index < numOfPlayers.value; index++) {
      if (tempListOfPlayers[index] && tempListOfPlayers[index].name != "") {
        updatePlayerNames(index);
      } else if (tempListOfPlayers.length < numOfPlayers.value) {
        const tempObject = {};
        tempObject['name'] = 'Player ' + index;
        tempObject['score'] = '0';
        tempListOfPlayers.push(tempObject);
      } 
      
      if (tempListOfPlayers.length > numOfPlayers.value){
        tempListOfPlayers.pop();
      }
    }
  } else {
    // Resetting player list
    playerSetting.classList.add('hide');
    numOfPlayers.value = numOfPlayers.min;
    tempListOfPlayers.length = 0;
  }
  
  console.log(tempListOfPlayers);
  generatePlayerInput();
}

function updatePlayerNames(ind) {
  const tempPlayerInput = document.getElementById("player-" + ind);
  if (tempPlayerInput != null) {
    tempListOfPlayers[ind].name = tempPlayerInput.value;
  }
}

function generatePlayers() {
  for (let index = 0; index < listOfPlayers.length; index++) {
    const tempRow = document.createElement("tr");
    const tempName = document.createElement("th");
    const tempScore = document.createElement("td");

    tempName.setAttribute('id','player-'+ index + '-input')
    tempName.innerHTML = listOfPlayers[index].name;
    tempScore.innerHTML = listOfPlayers[index].score;

    tempRow.appendChild(tempName);
    tempRow.appendChild(tempScore);

    players.appendChild(tempRow);
  }
}

function storeScores() {

}

function updateScores() {
  
}

// Game Settings
function openGameSettings() {
  gameSettings.classList.toggle('hide');
  tempListOfPlayers = listOfPlayers;
}

function closeSettings() {
  gameSettings.classList.toggle('hide');
  var form = document.getElementById("settings");
  

  form.addEventListener('submit', handleForm);

  // Maintain last saved values
  timerSetting.value = maxTime;
  categoriesSetting.checked = showCategories;
  trackPlayers.checked = showPlayers;
  layoutSetting.value = letterArrangement;
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
  showPlayers = trackPlayers.checked;
  letterArrangement = layoutSetting.value;
  listOfPlayers = tempListOfPlayers;
}
