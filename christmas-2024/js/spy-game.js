var maxRounds = 6;
const sabotage = true;
const sabotageRound = 1;

const results = document.getElementById('results');
const agentName = document.getElementById('name');

var investigationResults = {};


// DOCUMENT SETUP
$(document).ready(function() {
  // reads data
  fetch("https://server-api-zn92.onrender.com/data", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    investigationResults = data.data;
    
    for (let index = 1; index <= Object.keys(investigationResults).length; index++) {

      if (numOfSpies(investigationResults[index]) == spies.length) {
        window.open('https://server-api-zn92.onrender.com/dance', '_blank').focus();
      }
      
      console.log(investigationResults[index], index);
      showSuspects(investigationResults[index], index);
    }
    

    console.log("Server Response:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
});


function showSuspects(array, round) {
  const newDiv = document.createElement('div');
  newDiv.classList = "results";
  const newHeading = document.createElement('p');

  newHeading.innerHTML = 'Round ' + round + ' Suspects';

  const newList = document.createElement('ul');
  newList.id = 'round-'+ round+1 + '-suspects';

  array.forEach(element => {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = element;
    newList.append(newListItem);
  });
  
  const newResult = document.createElement('p');

  if (numOfSpies(array) > 0) {
    newResult.classList.add('red-text');
  } else {
    newResult.classList.add('green-text');
  }

// Sabotage option
  if (sabotage && sabotageRound == round) {
    var alteredResults = numOfSpies(array);
    if (numOfSpies(array) > 0) {
      alteredResults = numOfSpies(array) - 1;
    }
    console.log(alteredResults);
    newResult.innerHTML = alteredResults + " of " + (array.length - 1) + " are Spies. One result has been hidden";
  } else {
    newResult.innerHTML = numOfSpies(array) + " of " + array.length + " are Spies";
  }

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