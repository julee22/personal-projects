const investigationForm = document.getElementById('investigationForm');
const suspectList = document.getElementsByClassName('suspect-list');
const suspectListArray = Array.from(suspectList);
const suspectListObject = {};

var motherRound = {};
var round = 0;


// DOCUMENT SETUP
$(document).ready(function() {
  // investigation functions
  listOfAgents();
  
  investigationForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
  });
});

function listOfAgents() {
  // Create dropdown of every agent
  suspectListArray.forEach(list => {
    const placeholder = document.createElement('option');
    placeholder.disabled;
    placeholder.textContent = "Select an agent";
    list.appendChild(placeholder);

    guests.forEach(guest => {
      if (!investigators.includes(guest)) { //if not an investigator
        const opt = document.createElement('option');
        opt.value = guest; // Set the value
        opt.textContent = guest; // Set the visible text
        list.appendChild(opt); // Add the guest to the dropdown
      }
    });
  });
}

function investigate(roundCounter) {
  // Go to https://server-api-zn92.onrender.com to clear the database

  // Reads data
  fetch("https://server-api-zn92.onrender.com/data", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    motherRound = data.data;  
    console.log("old Round", motherRound);

    // Get the values from the form
    for (let n = 0; n < suspectListArray.length; n++) {
      suspectListArray[n] = document.getElementById('suspectList-'+n).value;
    }

    // set key and value variables
    let key = roundCounter;
    let value = suspectListArray;
    
    motherRound[key] = value;

    // Sends data
    fetch("https://server-api-zn92.onrender.com/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(motherRound) //dataToSend must be json obj ex: {"test":{"hi", "banana"}}
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    console.log("Server Response:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function resetData() {
  // Sends data
  fetch("https://server-api-zn92.onrender.com/update", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({}) //dataToSend must be json obj ex: {"test":{"hi", "banana"}}
  })
  .then(response => response.json())
  .then(data => {
      console.log("Server Response:", data);
  })
  .catch(error => {
      console.error("Error:", error);
  });
}