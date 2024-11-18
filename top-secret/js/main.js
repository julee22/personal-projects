
// VARIABLES
const code = [7,1,8,6];

const countdown = document.getElementById("countdown");
var countdownRef;
var minVal = 14;
var secVal = 59;

// DOCUMENT SETUP
$(document).ready(function(){
  startCountdown();

  codeInput();
});

// Tests answer submitted
function checkAnswer() {
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

// Countdown
function startCountdown() {  
  var tempMinVal, tempSecVal;
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

    countdown.innerHTML = tempMinVal + " : " + prependZero(tempSecVal--);
  }, 1000);
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

function cwinPopup(elem) {
  document.getElementById(elem).classList.toggle('hide');
}