const investigationForm = document.getElementById('investigationForm');
const suspectList = document.getElementsByClassName('suspect-list');
const suspectListArray = Array.from(suspectList);


// DOCUMENT SETUP
$(document).ready(function() {
  // investigation functions
  listOfAgents();
  
  investigationForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
  });
});

function listOfAgents() {

  suspectListArray.forEach(list => {
    const placeholder = document.createElement('option');
    placeholder.disabled;
    placeholder.textContent = "Select an agent";
    list.appendChild(placeholder);

    guests.forEach(guest => {
      if (!investigators.includes(guest)) {
        const opt = document.createElement('option');
        opt.value = guest; // Set the value
        opt.textContent = guest; // Set the visible text
        list.appendChild(opt); // Add the guest to the dropdown
      }
    });
  });
}

function investigate(round) {

    // Get the values from the form
    var listOfSuspects = [];

    for (let n = 0; n < suspectListArray.length; n++) {
      listOfSuspects[n] = "'" + document.getElementById('suspectList-'+n).value + "'";
    }
    
    // Create JavaScript content
    const jsContent = `var suspectsRound${round} = [${listOfSuspects}];`;

    // Create a Blob with the JavaScript content
    const blob = new Blob([jsContent], { type: 'text/javascript' });

    // Create a link to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `round-${round}.js`;
    link.style.display = 'none';

    // Append link to body and trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}