var maxRounds = 6;

const results = document.getElementById('results');
const agentName = document.getElementById('name');


// DOCUMENT SETUP
$(document).ready(function() {
  // game results functions
  
  if (suspectsRound1) {
    showSuspects(suspectsRound1, 1);
  }
  if (suspectsRound2) {
    showSuspects(suspectsRound2, 2);
  }
  if (suspectsRound3) {
    showSuspects(suspectsRound3, 3);
  }
  if (suspectsRound4) {
    showSuspects(suspectsRound4, 4);
  }
  if (suspectsRound5) {
    showSuspects(suspectsRound5, 5);
  }
  if (suspectsRound6) {
    showSuspects(suspectsRound6, 6);
  }

});


function showSuspects(array, round) {
  const newDiv = document.createElement('div');
  newDiv.classList = "results";
  const newHeading = document.createElement('p');

  newHeading.innerHTML = 'Round ' + round + ' Suspects';

  const newList = document.createElement('ol');
  newList.id = 'round-'+ round + '-suspects';

  array.forEach(element => {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = element;
    newList.append(newListItem);
  });
  
  const newResult = document.createElement('p');
  newResult.innerHTML = numOfSpies(array) + " of " + array.length + " are Spies";

  newDiv.appendChild(newHeading);
  newDiv.appendChild(newList);
  newDiv.appendChild(newResult);
  results.appendChild(newDiv);
}

function numOfSpies(array) {
  var total = 0;

  array.forEach(element => {
    if (spies.includes(element)) {
      total++;
    }
  });

  return total;
}

function switchTab(tabName, elem) {
  const allTabs = document.getElementsByClassName('tab-content');
  const allTabBtns = document.getElementsByClassName('tab');

  for (let index = 0; index < allTabs.length; index++) {
    const tab = allTabs[index];
    const tabBtn = allTabBtns[index];
    tab.classList.add('hide');    
    tabBtn.classList.remove('active');    
  }

  elem.classList.add('active');
  document.getElementById(tabName).classList.remove('hide');
}