import characters from "./data.js";

var charObject = Object;
var selectedChar = "";

const profileKeys = ["gender","birthDate","age","relStatus","personality","work","other"];
const otherProfileKeys = ["gender","birthDate","age","relStatus","impression","work","other"]

const loginWrapper = document.getElementById("characterForm");
const mainWrapper = document.getElementById("main");

$(document).ready(function(){
});

window.checkPassword = function() {
    event.preventDefault()
    selectedChar = document.getElementById("characterList").value;
    const pass = document.getElementById("password");
    
    if (pass) {
        if (pass.value == characters[selectedChar].password) {
            loginWrapper.classList.add("hide");
            mainWrapper.classList.remove("hide");
            charObject = characters[selectedChar];
            generateProfile();
            generateBackground();
            generateRelationList();
        } else {
            showError();
        }
    } else {
        showError();
    }
}

window.switchTab = function(tab) {
    const allTabContent = document.getElementsByClassName('tab-content');
    for (let element of allTabContent) {
        if (tab == element.id) {
            element.classList.add("show");
            element.classList.remove("hide");
        } else {
            element.classList.remove("show");
            element.classList.add("hide");
        }
    }
}

// Generate content functions

function generateProfile() {
    const name = document.getElementById('name');
    name.textContent = charObject['name'];

    profileKeys.forEach(key => {
        const element = document.getElementById(key); 
        
        if (["gender","birthDate","age","relStatus"].includes(key)) {
            element.textContent = charObject.personalDetails[key]; 
        } else if (key == 'other') {
            charObject[key].forEach(index => {
                const listItem = document.createElement('li');
                listItem.textContent = index;
                element.appendChild(listItem);
            });
        } else {
            element.textContent = charObject[key];   
        }
    });
}

function generateBackground() {
    // Generates dynamic history content
    const container = document.getElementById('history');

    charObject.history.forEach(subobject => {
        // Create elements
        const header = document.createElement('h2');
        const content = document.createElement('p');

        header.textContent = subobject.title;
        content.textContent = subobject.description;

        // Append content > container
        container.appendChild(header);
        container.appendChild(content);
    });

    // Populates How you got here
    const howGotHere = document.getElementById('whyYouHere');
    howGotHere.textContent = charObject['whyYouHere'];
}

function generateRelationList() {
    const charDropdown = document.getElementById('relationList');
    charDropdown.querySelector(`option[value="A"]`).remove();
}

window.generateRelationship = function(elem) {
    const otherCharObject = charObject.relationships[elem.value];
    
    const name = document.getElementById('other-name');
    name.textContent = otherCharObject['name'];

    otherProfileKeys.forEach(key => {
        const element = document.getElementById('other-'+key); 
        
        if (["other-gender","other-birthDate","other-age","other-relStatus"].includes('other-'+key)) {
            element.textContent = otherCharObject.personalDetails[key]; 
        } else if (key == 'other') {
            otherCharObject[key].forEach(index => {
                const listItem = document.createElement('li');
                listItem.textContent = index;
                element.appendChild(listItem);
            });
        } else {
            element.textContent = otherCharObject[key];   
        }
    });
    
}

function generateTimeline() {
    const timelineId = document.getElementById("timline");
    
    // Create table for gender, dob, personality, work, other
    const table = document.createElement('table');

    timeline.forEach(key => {
        // Create elements
        const row = document.createElement('tr');
        const headerCell = document.createElement('th');
        const cell = document.createElement('td');

        if (key == 'birthDate') { // Adds age
            headerCell.textContent = "Date of birth";
            cell.textContent = charObject.personalDetails[key] + "(" + charObject.personalDetails['age'] + ")";
        } else {
            headerCell.textContent = key;
            cell.textContent = charObject.personalDetail[key];
        }

        // Append cells > row
        row.appendChild(headerCell);
        row.appendChild(cell);
        table.appendChild(row);
    });

    timelineId.appendChild(table);
}

function showError() {
    const errorMessage = document.getElementById("pass-error");
    errorMessage.classList.add("show");
    console.log("show error");
}