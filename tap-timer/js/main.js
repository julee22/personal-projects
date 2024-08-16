const classicLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','V','W'];

let letterList = document.getElementById("letter-list");

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
    const letter = document.createElement("p");
    letter.innerText = classicLetters[n];
  }
}