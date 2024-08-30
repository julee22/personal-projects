
// VARIABLES
const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
// const classicLetters = ['A','B','C','D','E'];
let leftoverLetters;

const game = document.getElementById("game");
const gameEnding = document.getElementById("lose-screen");
const gameSettings = document.getElementById("settings-popup");

const letterList = document.getElementById("letters-list");
const layoutSetting = document.getElementById("layout-setting");
var letterArrangement = "grid";

const selectedCategory = document.getElementById("category");
const categoriesSetting = document.getElementById("category-setting");
var showCategories = true;

const timerSetting = document.getElementById("timer-setting");
const timer = document.getElementById("timer");
var timerRef;
var maxTime = 10;

const trackPlayers = document.getElementById("track-players");
const playerSetting = document.getElementById("players-setting");
const numOfPlayers = document.getElementById("number-players");
const playerList = document.getElementById("players-list");
const players = document.getElementById("players");
const playerTable = document.getElementsByClassName("player-table")[0];
var showPlayers = false;
var settingsShowPlayers = showPlayers;
var currentPlayer, nextPlayer;
var listOfPlayers = [];
var tempListOfPlayers = [];

// DOCUMENT SETUP
$(document).ready(function(){
  
  timerSetting.defaultValue = 10;
  trackPlayers.checked = showPlayers;
  categoriesSetting.checked = showCategories;
  
  if (window.innerWidth < 767) {
    letterArrangement = 'grid';
  }
  layoutSetting.value = letterArrangement;

  generateCategory();
  generateGame();

  trackPlayers.addEventListener("click", function (e) {
    settingsShowPlayers =  trackPlayers.checked;
    numOfPlayers.value = 2;
    updateListOfPlayers();
    for (let index = 1; index <= numOfPlayers.value; index++) {
      generatePlayerInputs();
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
  
  if (showPlayers && playerTable) {
    playerTable.classList.remove('hide');
  } else {
    playerTable.classList.add('hide');
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

// Reset letter list + show another category.
function resetGame() {
  letterList.innerText = "";
  gameEnding.classList.add('hide');
  
  if (showCategories) {
    generateCategory();
  }

  generateGame();
}

// Reset entire game with new players.
function newGame() {
  letterList.innerText = "";
  gameEnding.classList.add('hide');
  generateGame();

  if (showCategories) {
    generateCategory();
    document.getElementById("refresh-category").classList.remove("hide");
  } else {
    selectedCategory.innerHTML = "";
    document.getElementById("refresh-category").classList.add("hide");
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
    letterList.innerText = "";
    generateGame();
  }
  
  if (showPlayers) {
    updateTurn(currentPlayer);
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

  // disabled all other buttons 
  const allButtons = document.querySelectorAll('button:not(.letter)');
  allButtons.forEach(element => {
    element.disabled = true;
  });


  timerRef = setInterval(function() {

    if (index == maxTime) {
      gameEnding.classList.remove('hide');
      if (showPlayers) {
        updateScores();
        // Uncomment if you want the next player to go after a loss
        // updateTurn(currentPlayer); 
      } else {
        document.getElementById("loser").innerHTML = "YOU";
      }
      timer.innerHTML = "0";
      clearInterval(timerRef);
      
      // renable buttons
      allButtons.forEach(element => {
        element.disabled = false;
      });
      timer.classList.remove("pulse");
    } else {
      timer.innerHTML = maxTime - index;
      index++;
      timer.classList.add("pulse");
    }
  }, 1000);
  timer.classList.remove("pulse");
}

// Player Settings
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
    // playerInput.setAttribute('required', true);
    playerInput.setAttribute('minlength',"1");
    playerInput.setAttribute('value', tempListOfPlayers[index].name)
    
    playerList.appendChild(playerLabel);
    playerList.appendChild(playerInput);
  }
}

function updateListOfPlayers() {
  if (settingsShowPlayers) {
    playerSetting.classList.remove('hide');
    var tmpObject = {};

    for (let index = 0; index < numOfPlayers.value; index++) {
      if (tempListOfPlayers[index] && tempListOfPlayers[index].name != "") {
        updatePlayerNames(index);
      } else if (tempListOfPlayers.length < numOfPlayers.value) {
        const tempObject = {};
        tempObject['name'] = 'Player ' + index;
        tempObject['score'] = 0;
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

// Players in game
function generatePlayers() {
  const rowHeader = document.createElement("tr");
  const nameHeader = document.createElement("th");
  const scoreHeader = document.createElement("td");

  rowHeader.classList.add("table-header");
  nameHeader.innerHTML = "Players";
  nameHeader.setAttribute('scope','col');
  scoreHeader.innerHTML = "Losses";
  scoreHeader.setAttribute('scope','col');

  rowHeader.appendChild(nameHeader);
  rowHeader.appendChild(scoreHeader);

  players.appendChild(rowHeader);

  for (let index = 0; index < listOfPlayers.length; index++) {
    const tempRow = document.createElement("tr");
    const tempName = document.createElement("th");
    const tempScore = document.createElement("td");

    tempName.setAttribute('id','player-'+ index)
    tempName.setAttribute('scope','row');
    tempName.setAttribute('class','player-names');
    tempName.innerHTML = listOfPlayers[index].name;
    if (index == 0) {
      currentPlayer = listOfPlayers[index].name;
      tempName.classList.add("current-player");
    }
    tempScore.setAttribute('id','player-'+ index+ '-score');
    tempScore.innerHTML = listOfPlayers[index].score;

    tempRow.appendChild(tempName);
    tempRow.appendChild(tempScore);

    players.appendChild(tempRow);
  }
}

function updateTurn(currPlayer) {
  var currPlayerIndex = listOfPlayers.map(e => e.name).indexOf(currPlayer);
  var nextPlayerIndex;

  if (currPlayerIndex == listOfPlayers.length - 1) {
    nextPlayerIndex = 0;
  } else {
    nextPlayerIndex = currPlayerIndex + 1;
  }

  nextPlayer = listOfPlayers[nextPlayerIndex].name;

  // Find current player and remove class
  var currPlayerElem = document.getElementById('player-'+ currPlayerIndex);
  currPlayerElem.classList.remove("current-player");

  var nextPlayerElem = document.getElementById('player-'+ nextPlayerIndex);
  nextPlayerElem.classList.add("current-player");

  // Change current player
  currentPlayer = nextPlayer;
}

function updateScores() {
  // displays losing name
  document.getElementById("loser").innerHTML = currentPlayer;
  // stores score
  var losingPlayer = listOfPlayers.find(({ name }) => name === currentPlayer);
  losingPlayer.score++;
  // displays score
  var losingPlayerIndex = listOfPlayers.map(e => e.name).indexOf(currentPlayer);
  document.getElementById('player-'+ losingPlayerIndex + '-score').innerHTML = losingPlayer.score;
}

function resetScores() {
  for (let index = 0; index < listOfPlayers.length; index++) {
    listOfPlayers[index].score = 0;
  }
  newGame();
}

// Game Settings
function openGameSettings() {
    gameSettings.classList.toggle('hide');
    numOfPlayers.value = listOfPlayers.length;
    
    if (window.innerWidth < 767) {
      layoutSetting.value = 'grid';
      layoutSetting.options[0].disabled = true;
    } else {
      layoutSetting.value = letterArrangement;
    }

    if (showPlayers) {
      tempListOfPlayers.length = 0;
      tempListOfPlayers = structuredClone(listOfPlayers);
    }

    settingsShowPlayers = showPlayers;
    updateListOfPlayers();
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
  gameSettings.classList.toggle('hide');

  var form = document.getElementById("settings");
  form.addEventListener('submit', handleForm);
}

function updateGameSettings() {
  maxTime = timerSetting.value;
  showCategories = categoriesSetting.checked;
  showPlayers = settingsShowPlayers;
  letterArrangement = layoutSetting.value;

  if (showPlayers) {
    for (let index = 0; index < numOfPlayers.value; index++) {
      updatePlayerNames(index);
    }
    listOfPlayers.length = 0;
    listOfPlayers = structuredClone(tempListOfPlayers);

  } else {
    listOfPlayers.length = 0;
    players.innerHTML = "";
  }
}

function openPopup(elem) {
  document.getElementById(elem).classList.toggle('hide');
}

function closePopup(elem) {
  document.getElementById(elem).classList.toggle('hide');
}