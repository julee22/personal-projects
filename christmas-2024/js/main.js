
// Copy
var allCopy = [{
  id: 'mission-heading',
  copy: 'Mission Details'
}, {
  id: 'mission-brief',
  copy: 'Your mission should you choose to accept it, is to attend a gathering of secret agents on Christmas Eve and discover the true meaning of Christmas.'
}, {
  id: 'mission-details-location',
  copy: 'Location: 32 St James Ave'
}, {
  id: 'mission-details-date',
  copy: 'Date: 24-12-2024'
}, {
  id: 'mission-details-time',
  copy: 'Time: 19H00'
}
]

var copyIndex = 0;
var i = 0;
var speed = 100;



// DOCUMENT SETUP
$(document).ready(function() {
  typeWriter(allCopy[0].id, allCopy[0].copy);
  
});

function nextCopy() {
  if (copyIndex < allCopy.length) {
    typeWriter(allCopy[copyIndex].id, allCopy[copyIndex].copy);
  }
}


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