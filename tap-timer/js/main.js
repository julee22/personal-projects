
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
var currentPlayer, nextPlayer;
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
      generatePlayerInputs(index);
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
  console.log("new game", listOfPlayers);

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
  updateTurn(currentPlayer);
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
function generatePlayerInputs() {
  playerList.innerHTML = "";
  
  for (let index = 0; index < tempListOfPlayers.length; index++) {
    const playerLabel = document.createElement("label");
    const playerInput = document.createElement("input");

    playerLabel.setAttribute('for','player-'+ index);
    playerLabel.innerHTML = 'Player ' + index;

    playerInput.setAttribute('id','player-'+ index +'-input');
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
  
  generatePlayerInputs();
}

function updatePlayerNames(ind) {
  const tempPlayerInput = document.getElementById("player-" + ind + "-input");
  if (tempPlayerInput != null) {
    tempListOfPlayers[ind].name = tempPlayerInput.value;
  }
}

function generatePlayers() {
  for (let index = 0; index < listOfPlayers.length; index++) {
    const tempRow = document.createElement("tr");
    const tempName = document.createElement("th");
    const tempScore = document.createElement("td");

    tempName.setAttribute('id','player-'+ index)
    tempName.innerHTML = listOfPlayers[index].name;
    if (index == 0) {
      currentPlayer = listOfPlayers[index].name;
      tempName.classList.add("current-player");
    }
    tempScore.innerHTML = listOfPlayers[index].score;

    tempRow.appendChild(tempName);
    tempRow.appendChild(tempScore);

    players.appendChild(tempRow);
  }
}

function updateTurn(currPlayer) {
  
  console.log("current player?", currPlayer);
  var currPlayerIndex = listOfPlayers.map(e => e.name).indexOf(currPlayer);
  var nextPlayerIndex;

  if (currPlayerIndex == listOfPlayers.length - 1) {
    nextPlayerIndex = 0;
  } else {
    nextPlayerIndex = currPlayerIndex + 1;
  }

  nextPlayer = listOfPlayers[nextPlayerIndex].name;
  console.log("current player index?", currPlayerIndex);

  // Find current player and remove class
  var currPlayerElem = document.getElementById('player-'+ currPlayerIndex);
  currPlayerElem.classList.remove("current-player");

  var nextPlayerElem = document.getElementById('player-'+ nextPlayerIndex);
  nextPlayerElem.classList.add("current-player");

  // Change current player
  currentPlayer = nextPlayer;
  console.log("new current player?", currentPlayer);
}

function storeScores() {

}

function updateScores() {
  
}

// Game Settings
function openGameSettings() {
  gameSettings.classList.toggle('hide');
  numOfPlayers.value = listOfPlayers.length;
  
  
  if (showPlayers) {
    tempListOfPlayers.length = 0;
    tempListOfPlayers = structuredClone(listOfPlayers);
    updateListOfPlayers();
  }
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

  
  for (let index = 0; index < numOfPlayers.value; index++) {
    updatePlayerNames(index);
  }

  listOfPlayers.length = 0;
  listOfPlayers = structuredClone(tempListOfPlayers);
  console.log("temp list", tempListOfPlayers);
  console.log("update game", listOfPlayers);
}
