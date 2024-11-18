
// VARIABLES
const code = [7,1,8,6];
var inputAnswers = document.getElementsByClassName("number-field");
var guessCount = 1;

const countdown = document.getElementById("countdown");
var countdownRef;
var minVal = 14;
var secVal = 59;  
var tempMinVal, tempSecVal;

// DOCUMENT SETUP
$(document).ready(function(){
  clearCode();
  startCountdown();
  codeInput();
});

// Tests answer submitted
function checkAnswer() {
  var answer1 = document.getElementById("first").value;
  var answer2 = document.getElementById("second").value;
  var answer3 = document.getElementById("third").value;
  var answer4 = document.getElementById("fourth").value;

  console.log(answer1, answer2, answer3, answer4);
  console.log(code);

  if (answer1 == code[0] &&
    answer2 == code[1] && 
    answer3 == code[2] &&
    answer4 == code[3]
  ) {
    closePopup("main");
    openPopup("win-screen");
    startConfettiEffect();
  } else if (guessCount == 3) {
    closePopup("main");
    openPopup("lose-screen");
  } else {
    var currGuess = document.getElementById("guess-"+guessCount);
    currGuess.classList.add("wrong");
    guessCount++;
    clearCode();
  }
}

// Code number fields
function codeInput() {
  const inputs = document.querySelectorAll('#code > *[id]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(event) {
      if (event.key === "Backspace") {
        inputs[i].value = '';
        if (i !== 0)
          inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== '') {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
}

function clearCode() {
  for (let index = 0; index < inputAnswers.length; index++) {
    const answer = inputAnswers[index];
    answer.value = "";
    
  }
}

// Countdown
function startCountdown() {
  tempMinVal = minVal;
  tempSecVal = secVal;

  countdownRef = setInterval(function() {
    if (tempMinVal == 0 && tempSecVal == 0) {
      countdown.innerHTML = "00 : 00";
      clearInterval(countdownRef);
    } else if (tempSecVal < 0) {
      tempMinVal--;
      tempSecVal = secVal;
    }

    countdown.innerHTML = prependZero(tempMinVal) + " : " + prependZero(tempSecVal--);
  }, 1000);
}

function refresh() {
  minVal = 4;
  countdown.innerHTML = "05 : 00";
  
  closePopup("lose-screen");
  openPopup("main");

  clearInterval(countdownRef);
  startCountdown();
}

function prependZero(input) {
  if(input < 10) {
    return '0' + input;
  } else {
    return input;
  }
}

// Game Settings
function openPopup(elem) {
  document.getElementById(elem).classList.toggle('hide');
}

function closePopup(elem) {
  document.getElementById(elem).classList.toggle('hide');
}

// for starting the confetti 
const startConfettiEffect = () => {
  setTimeout(function() {
      confetti.start()
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 

const stopConfettiEffect = () => {
  setTimeout(function() {
      confetti.stop()
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};