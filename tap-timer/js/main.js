// const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];
const classicLetters = ['A','B','C'];
let leftoverLetters;

const letterList = document.getElementById("letters-list");

$(document).ready(function(){

  $("button").click(function(){
  });

  generateGame();
  
});

function openGameSettings() {
  $("#settings").classList.toggle('open');
}

function updateGameSettings() {

}

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
  leftoverLetters = classicLetters.slice();
}

function resetGame() {
  // letterList.innerText = "";
  while (letterList.firstChild) {
      letterList.removeChild(letterList.firstChild);
      // OR 
      // letterList.firstChild.remove();
  }
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
    return resetGame();
  }
}

function resetTimer() {

}