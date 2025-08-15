import characters from "./data.js";

var charObject = Object;
var selectedChar = "";

const profileKeys = ["gender","birthDate","age","relStatus","personality","work","other","dayOfTheMurder", "motives"];
const otherProfileKeys = ["gender","birthDate","age","relStatus","impression","work","other","dayOfTheMurder"]

const loginWrapper = document.getElementById("characterForm");
const mainWrapper = document.getElementById("main");

$(document).ready(function(){
});

// Password
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
            generateRelationList();
            generateTimeline();
        } else {
            showError();
        }
    } else {
        showError();
    }
}

function showError() {
    const errorMessage = document.getElementById("pass-error");
    errorMessage.classList.add("show");
    console.log("show error");
}

// Navigation
window.switchTab = function(tab, tabContent) {
    const allTabContent = document.getElementsByClassName('tab-content');
    for (let element of allTabContent) {
        if (tabContent == element.id) {
            element.classList.add("show");
            element.classList.remove("hide");
            tab.scrollIntoView();
        } else {
            element.classList.remove("show");
            element.classList.add("hide");
        }
    }
    
    const allTabs = document.getElementsByClassName('tab');
    for (let element of allTabs) {
        element.classList.remove("active");
    }

    tab.classList.add("active");
}

// Generate content functions
function generateProfile() {
    const name = document.getElementById('name');
    name.textContent = charObject['name'];

    profileKeys.forEach(key => {
        const element = document.getElementById(key); 
        
        if (["gender","birthDate","age","relStatus"].includes(key)) {
            element.textContent = arrayOrString(charObject.personalDetails[key]);

        } else if (["other","dayOfTheMurder","motives"].includes(key)) {
            if (charObject[key] == "") {
                element.innerHTML = "<li>N/A</li>";
            } else {
                charObject[key].forEach(index => {
                    const listItem = document.createElement('li');
                    listItem.textContent = index;
                    element.appendChild(listItem);
                });
            }
        } else {
            element.textContent = arrayOrString(charObject[key]);   
        }
    });
    
    generateBackground(charObject,'history');
}

function generateRelationList() {
    const charDropdown = document.getElementById('relationList');
    charDropdown.querySelector(`option[value="`+selectedChar+`"]`).remove();
    generateRelationship(charDropdown);
}

window.generateRelationship = function(elem) {
    const otherCharObject = charObject.relationships[elem.value];
    
    // const name = document.getElementById('other-name');
    // name.textContent = otherCharObject['name'];

    otherProfileKeys.forEach(key => {
        const element = document.getElementById('other-'+key); 
        
        if (["other-gender","other-birthDate","other-age","other-relStatus"].includes('other-'+key)) {
            element.textContent = arrayOrString(otherCharObject.personalDetails[key]);

        } else if (key == 'other' || key == 'dayOfTheMurder') {
            // resets for other characters
            element.innerHTML = "";


            if (otherCharObject[key] == "") {
                element.innerHTML = "<li>N/A</li>";
            } else {
                otherCharObject[key].forEach(index => {
                    const listItem = document.createElement('li');
    
                    listItem.textContent = index;
                    element.appendChild(listItem);
                });
            }
        } else {
            element.textContent = arrayOrString(otherCharObject[key]);   
        }
    });
    
    // Resets and populates other-history
    const otherHistory = document.getElementById('other-history'); 
    otherHistory.innerHTML = "";

    if ('history' in otherCharObject) {
        otherHistory.innerHTML = "<h2>Shared history</h2>";
        generateBackground(otherCharObject,'other-history', 'h4');
    }
}

function generateBackground(object, id, heading) {
    heading = heading || 'h3';
    // Generates dynamic history content
    const container = document.getElementById(id);

    object.history.forEach(subobject => {
        // Create elements
        const header = document.createElement(heading);
        const content = document.createElement('p');

        header.textContent = subobject.title;
        content.textContent = subobject.description;

        // Append content > container
        container.appendChild(header);
        container.appendChild(content);
    });

    // Populates How you got here for main profile only
    if (object == charObject) {
        const howGotHere = document.getElementById('whyYouHere');
        howGotHere.textContent = object['whyYouHere'];
    }
}

function generateTimeline() {
    const timelineId = document.getElementById("timeline");
    
    charObject.timeline.forEach(key => {
        // Create elements
        const row = document.createElement('tr');
        const timeCell = document.createElement('th');
        const eventCell = document.createElement('td');
        const eventList = document.createElement('ul');

        timeCell.scope = 'row';
        timeCell.textContent = key.time;
        row.appendChild(timeCell);

        // Creates a list item for event
        key.events.forEach(event => {
            const eventItem = document.createElement('li');

            eventItem.innerHTML = event;
            eventList.appendChild(eventItem);
        });
        
        // Append list > cell > row > table
        eventCell.appendChild(eventList);
        row.appendChild(eventCell);
        timelineId.appendChild(row);
    });
}

// If array, return string with commas
function arrayOrString(object) {
    if (Array.isArray(object)) {
        return object.join(", ");
    } else {
        return object;
    }
}