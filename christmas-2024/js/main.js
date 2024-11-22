
// Copy
var allCopy = [{
  id: 'mission-heading',
  copy: 'Mission Details'
}, {
  id: 'mission-brief',
  copy: 'Your mission, should you choose to accept it, is to attend a gathering of secret agents on Christmas Eve and discover the true meaning of Christmas.'
}, {
  id: 'mission-loc',
  copy: 'Location:'
}, {
  id: 'mission-loc-details',
  copy: '32 St James Ave, Woodbridge, ON'
},{
  id: 'mission-date',
  copy: 'Date:'
}, {
  id: 'mission-date-details',
  copy: '24-12-2024'
}, {
  id: 'mission-time',
  copy: 'Time:'
}, {
  id: 'mission-time-details',
  copy: '19H00'
}, {
  id: 'mission-accept',
  copy: 'Do you accept?'
}
]

var copyIndex = 0;
var i = 0;
var speed = 25;

var showMission = false;
var showForm = false;

const agentName = document.getElementById('name');
const landing = document.getElementById("landing");
const mission = document.getElementById("mission");
const question = document.getElementById("question");
const successMessage = document.getElementById("success-msg");

const timer = document.getElementById("timer");
var timerRef;
var currTime = 10;
var maxTime = 10;

const imageMap = document.getElementById("map");
var imageTimer;

// DOCUMENT SETUP
$(document).ready(function() {
  
  agentName.addEventListener("input", function(e) {
    if (agentName.value != '') {
      document.getElementById('goBtn').classList.add("show");
    }
  });
  
  const form = document.getElementById('my-form');
  const success_msg = document.getElementById('success-msg');

  form.reset();

  // form submission to Google Sheets
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // what to show after submission
      success_msg.classList.toggle('hide');
      form.style.display = "none";
      startTimer();
    })
  });
});

// typewriter effect
function typeWriter(missionId, missionCopy) {
  var currCopy = document.getElementById(missionId).innerHTML;

  if (i < missionCopy.length) {
    var newCopy = currCopy.replace(/.$/, '') + missionCopy.charAt(i) + "|";

    document.getElementById(missionId).innerHTML = newCopy;
    i++;
    setTimeout(typeWriter, speed, missionId, missionCopy);
  } else {
    document.getElementById(missionId).innerHTML = currCopy.replace(/.$/, '');
    i = 0;
    copyIndex++;
    nextCopy();
  }
}

// used to move on to the next paragraph
function nextCopy() {
  if (copyIndex < allCopy.length) {
    typeWriter(allCopy[copyIndex].id, allCopy[copyIndex].copy);
  } else {
    showForm = true;
    question.classList.toggle("hide");
  }
}

function nameEntered() {
  if (agentName.value != '') {
    typeWriter(allCopy[0].id, allCopy[0].copy);
    mission.classList.toggle("hide");
    landing.classList.toggle("hide");
    imageLoad();
  }
}

// Timer
function startTimer() {
  timer.innerHTML = maxTime;
  index = 1;


  timerRef = setInterval(function() {

    if (index == maxTime) {
      timer.innerHTML = "0";
      clearInterval(timerRef);
      window.location.replace("https://google.com");
    } else {
      timer.innerHTML = maxTime - index;
      index++;
    }
  }, 1000);
}

// image loading
function imageLoad() {
  var totalTime, intervalTime;
  var imageLoadAmount = 0;

  allCopy.forEach(element => {
    const copyLength = element.copy.length;
    totalTime = copyLength * speed;
    intervalTime = totalTime;
  });

  imageTimer = setInterval(function() {
    if (imageLoadAmount <= 100) {
      $(imageMap).css("clip-path", "polygon(0 0, 100% 0, 100% "+imageLoadAmount+"%, 0% "+imageLoadAmount+"%)" )
      imageLoadAmount += 10;
    } else {
      clearInterval(imageTimer);
    }
  }, intervalTime);
}