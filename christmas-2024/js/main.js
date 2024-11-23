
// Copy
var allCopy = [{
  id: 'welcome',
  copy: 'Welcome, Agent'
}, {
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
  id: 'mission-dress',
  copy: 'Dress in your best semi-formal disguise (masks will be provided)'
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

  
const form = document.getElementById('my-form');
const agentName = document.getElementById('name');
const welome = document.getElementById("welome");
const mission = document.getElementById("mission");
const question = document.getElementById("question");
const endingScreen = document.getElementById('success-msg');

const timer = document.getElementById("timer");
var timerRef;
var maxTime = 8;

const imageMap = document.getElementById("map");
var imageTimer;

// DOCUMENT SETUP
$(document).ready(function() {
  playAudio("sound/welcome.m4a");

  typeWriter(allCopy[0].id, allCopy[0].copy);

  agentName.addEventListener("input", function(e) {
    if (agentName.value != '') {
      document.getElementById('goBtn').classList.add("show");
    }
  });

  form.reset();

  // form submission to Google Sheets
  form.addEventListener("submit", function(e) {
    document.getElementById('submit').innerHTML = "Sending...";

    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      ending();
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
    if (missionId != "welcome") {
      nextCopy();
    } else {
      agentName.classList.remove("hide");
    }
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
    typeWriter(allCopy[1].id, allCopy[1].copy);
    mission.classList.remove("hide");
    welome.classList.add("hide");
    playAudio("sound/mission.m4a");
    imageLoad();
  }
}

function ending() {
  // what to show after submission
  playAudio("sound/thankyou.m4a");
  endingScreen.classList.toggle('hide');
  mission.classList.add('hide');
  form.style.display = "none";
  startTimer();

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

// Play audio
function playAudio(file) {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = file; // Set the source to the selected file
  audioPlayer.style.display = 'block'; // Display the audio controls if hidden
  audioPlayer.play(); // Play the audio
}