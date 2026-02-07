import {texts, calls} from "./phone-data.js";
import data from "./data.js";

var charObject = Object;
var phoneOwner = "";

var selectedChar = "";

const loginWrapper = document.getElementById("characterForm");
const mainWrapper = document.getElementById("main");

const textLog = document.getElementById('text-log');
const convoContainer = document.getElementById("conversation-list");
const conversation = document.getElementById("conversation");

const callLog = document.getElementById('call-list');

const mainImg = document.getElementById("main-img");

$(document).ready(function(){
    // Execute a function when the user presses a key on the keyboard
    loginWrapper.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submitBtn").click();
    }
    });
});

// Password
window.checkPassword = function() {
    event.preventDefault()
    phoneOwner = document.getElementById("characterList").value;
    const pass = document.getElementById("password");
    
    if (pass) {
        if (pass.value == characters[phoneOwner].phonePass) {
            loginWrapper.classList.add("hide");
            mainWrapper.classList.remove("hide");
            charObject = characters[phoneOwner];
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
window.openApp = function(appName) {
    const selectedApp = document.getElementById(appName);
    selectedApp.classList.remove("hide");

    mainWrapper.classList.add("hide");
}

window.backBtn = function() {
    const allSections = document.getElementsByTagName("section");
    
    for (let element of allSections) {
        if (!element.classList.contains("hide")) {
            element.classList.add("hide");
        }
    }
    mainWrapper.classList.remove("hide");
    callLog.innerHTML = "";
}

window.closeConvo = function() {
    textLog.classList.remove('hide');
    convoContainer.classList.add('hide');
    conversation.innerHTML = "";
}

// Generate content functions
window.openConversation = function(user, char) {
    phoneOwner = user;
    selectedChar = char;

    const selectedConversation = document.getElementById('selectedConvo');
    if (data[char]) {
        selectedConversation.innerHTML = data[char].name;
    } else {
        selectedConversation.innerHTML = char;
    }

    textLog.classList.add("hide");
    openApp('conversation-list');

    generateMessages(texts);
}

function filterPhoneContent(listContent) {
    const userKey = getKey(phoneOwner, selectedChar);
    const filteredList = listContent.filter((convo) => getKey(convo.from, convo.to) === userKey);
    console.log(filteredList);
    return filteredList;
}

function getKey(a, b) {
    return [a,b].sort().join("_");
}

// generate texts
function generateMessages(phonecontent) {
    filterPhoneContent(phonecontent).forEach(element => {
        
        // Create elements
        const messageWrapper = document.createElement('div');
            messageWrapper.classList.add("message-log");
        if (element.from == phoneOwner) {
            messageWrapper.classList.add("outgoing");
        } else {
            messageWrapper.classList.add("incoming");
        }

        const message = document.createElement('p');
        message.classList.add("message");

        const timestamp = document.createElement('p');
        timestamp.classList.add("timestamp");

        // assign values
        message.innerHTML = element.message;
        timestamp.innerHTML = element.time;

        // Append
        messageWrapper.appendChild(message);
        messageWrapper.appendChild(timestamp);
        conversation.appendChild(messageWrapper);
    });
}

// generate calls
window.generateCalls = function(user) {
    phoneOwner = user;
    const filteredList = calls.filter((convo) => convo.from == user || convo.to == user);
    filteredList.forEach(element => {
        // Create elements
        const callWrapper = document.createElement('div');
        callWrapper.classList.add("call-log");

        const profileImg = document.createElement('div');
        profileImg.classList.add('profile-img');

        const name = document.createElement('p');
        name.classList.add("call");

        const timestamp = document.createElement('p');
        timestamp.classList.add("timestamp");
        
        const icon = document.createElement('span');
        icon.classList.add('material-symbols-outlined');

        // assign values
        if (element.from == phoneOwner) {
            name.innerHTML = element.to;
            profileImg.id = "profile-img-"+element.to;
            icon.innerHTML = "call_made";
            timestamp.innerHTML = 'Outgoing, ' + element.time;
        } else {
            name.innerHTML = element.from;
            profileImg.id = "profile-img-"+element.from;
            icon.innerHTML = "call_received";
            timestamp.innerHTML = 'Incoming, ' + element.time;
        }

        // Append
        callWrapper.appendChild(profileImg);
        callWrapper.appendChild(name);
        callWrapper.appendChild(timestamp);
        callWrapper.appendChild(icon);
        callLog.appendChild(callWrapper);
    });
}

// set main image
window.setImage = function(path) {
    console.log(mainImg);
    mainImg.src = "../images/" + path + ".jpg";
}

// If array, return string with commas
function arrayOrString(object) {
    if (Array.isArray(object)) {
        return object.join(", ");
    } else {
        return object;
    }
}
