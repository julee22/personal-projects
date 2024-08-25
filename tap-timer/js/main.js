
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
var listOfPlayers = [{}];

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
    upatePlayers();
    for (let index = 1; index <= numOfPlayers.value; index++) {
      generatePlayerInput(index);
    }
  });

  numOfPlayers.addEventListener("click", function (e) {
    upatePlayers();
    playerList.innerHTML = "";
    for (let index = 1; index <= numOfPlayers.value; index++) {
      generatePlayerInput(index);
    }
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
    upatePlayers();
      
    players.innerHTML = "";
    
    for (let index = 1; index < listOfPlayers.length; index++) {
      generatePlayers(listOfPlayers[index].name , index);
    }
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
function generatePlayerInput(playerNum) {
  const playerLabel = document.createElement("label");
  const playerInput = document.createElement("input");

  playerLabel.setAttribute('for','player-'+ playerNum);
  playerLabel.innerHTML = 'Player ' + playerNum;

  playerInput.setAttribute('id','player-'+ playerNum);
  playerInput.setAttribute('type','text');
  playerInput.setAttribute('name', 'player-'+ playerNum);
  playerInput.setAttribute('required', true);
  playerInput.setAttribute('minlength',"1");
  if (playerNum < listOfPlayers.length) {
    playerInput.setAttribute('value', listOfPlayers[playerNum].name)
  } else {
    playerInput.setAttribute('value','')
  }
  
  playerList.appendChild(playerLabel);
  playerList.appendChild(playerInput);
  console.log("generating player input",playerNum,"of", listOfPlayers.length);
}

function upatePlayers() {
  console.log("tracking players?", showPlayers, numOfPlayers.value);

  if (showPlayers) {
    playerSetting.classList.remove('hide');
    var tmpObject = {};

    for (let index = 0; index < numOfPlayers.value; index++) {
      var playerNum = index + 1;
      if (listOfPlayers.length <= numOfPlayers.value) {
        const tempObject = {};
        tempObject['name'] = 'Player ' + playerNum;
        tempObject['score'] = '0';
        listOfPlayers.push(tempObject);
      } else if (listOfPlayers.length > numOfPlayers.value){
        listOfPlayers.pop();
      }
    }

  } else {
    // Resetting player list
    playerSetting.classList.add('hide');
    numOfPlayers.value = numOfPlayers.min;
    listOfPlayers.length = 0;
  }

}

function generatePlayers(name, ind) {
  const tempRow = document.createElement("tr");
  const tempName = document.createElement("th");
  const tempScore = document.createElement("td");

  tempName.setAttribute('id','player-'+ ind + '-input')
  tempName.innerHTML = name;
  tempScore.innerHTML = 0;

  tempRow.appendChild(tempName);
  tempRow.appendChild(tempScore);

  players.appendChild(tempRow);

}

function storeScores() {

}

function updateScores() {
  
}

// Game Settings
function openGameSettings() {
  gameSettings.classList.toggle('hide');
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


  // for (let index = 0; index < listOfPlayers.length; index++) {
  //   var playerNum = index + 1;
  //   var namePlayer = document.getElementById('player-'+ playerNum + '-input');
  //   listOfPlayers[index].name = namePlayer.value;
    
  //   console.log(listOfPlayers);
  // }
}
