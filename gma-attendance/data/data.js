const studentList = [
    {
        "name": "andre",
        "time": "7:00 - 7:30 PM"
    },
    {
        "name": "ariya",
        "time": "7:30 - 8:00 PM"
    },
    {
        "name": "anna",
        "time": "8:00 - 8:45 PM"
    },
    {
        "name": "leah",
        "time": "7:00 - 7:45 PM"
    },
    {
        "name": "eira",
        "time": "7:45 - 8:15 PM"
    },
    {
        "name": "louis",
        "time": ["8:15 - 8:45 PM","2:00 - 2:30 PM"]
    },
    {
        "name": "cleo",
        "time": "7:00 - 8:00 PM"
    },
    {
        "name": "casey",
        "time": "8:00 - 8:30 PM"
    },
    {
        "name": "kara",
        "time": "7:00 - 8:00 PM"
    },
    {
        "name": "kaylee",
        "time": "8:00 - 8:30 PM"
    },
    {
        "name": "kyle",
        "time": "11:30 - 12:00 PM"
    },
    {
        "name": "sarina",
        "time": "12:00 - 12:30 PM"
    },
    {
        "name": "darren",
        "time": "12:30 - 1:00 PM"
    },
    {
        "name": "Theo",
        "time": "12:00 - 12:15 PM"
    },
    {
        "name": "Valentina",
        "time": "12:15 - 12:30 PM"
    },
];

confirmedAttendance = [];
let confirmedTimeslot;


// 
const currentDate = new Date();

$(document).ready(function () {
    document.getElementById("currentDate").value = currentDate.toLocaleDateString("en-CA");
});

// When student name is selected
const studentSelect = document.getElementById("studentName");
let selectedStudent;

studentSelect.addEventListener("change", function () {
    selectedStudent = studentSelect.value;
    const student = studentList.find(s => s.name === selectedStudent);
    const timeslotElement = document.getElementById("timeslot");
    let timeslot;

        console.log(student);
    if (selectedStudent === "Louis") {
        if (currentDate.getDay() == 2) {
            timeslot = student.time[0]; // Use the first time slot for Tuesdays
        } else if (currentDate.getDay() == 6) {
            timeslot = student.time[1]; // Use the second time slot for Saturdays
        }
    } else {
        timeslot = student ? student.time : null;
    }
    if (student && timeslot) {
        timeslotElement.value = timeslot;
    } else {
        timeslotElement.value = "Time slot not available";
    }

    confirmedTimeslot = timeslot;
});

// Titlecase function
const toTitleCase = function(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
};

// signature
const signatureCanvas = document.getElementById("signaturePad");
const signatureInput = document.getElementById("signatureData");
const clearSignatureButton = document.getElementById("clearSignature");
const signatureContext = signatureCanvas.getContext("2d");

if (signatureCanvas && signatureInput) {
    let isDrawing = false;

    const getCanvasPoint = function(event) {
        const rect = signatureCanvas.getBoundingClientRect();
        const scaleX = signatureCanvas.width / rect.width;
        const scaleY = signatureCanvas.height / rect.height;

        return {
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY
        };
    };

    const startDrawing = function(event) {
        isDrawing = true;
        const point = getCanvasPoint(event);
        signatureContext.beginPath();
        signatureContext.moveTo(point.x, point.y);
        signatureContext.lineWidth = 2;
        signatureContext.lineCap = "round";
        signatureContext.lineJoin = "round";
        signatureContext.strokeStyle = "#000";
    };

    const draw = function(event) {
        if (!isDrawing) {
            return;
        }

        const point = getCanvasPoint(event);
        signatureContext.lineTo(point.x, point.y);
        signatureContext.stroke();
    };

    const stopDrawing = function() {
        if (!isDrawing) {
            return;
        }

        isDrawing = false;
        signatureContext.beginPath();
        signatureInput.value = signatureCanvas.toDataURL("image/png");
    };

    signatureCanvas.addEventListener("pointerdown", startDrawing);
    signatureCanvas.addEventListener("pointermove", draw);
    signatureCanvas.addEventListener("pointerup", stopDrawing);
    signatureCanvas.addEventListener("pointerleave", stopDrawing);
    signatureCanvas.addEventListener("pointercancel", stopDrawing);

    clearSignatureButton.addEventListener("click", function () {
        signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
        signatureInput.value = "";
    });
}

clearSignature = function() {
    signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signatureInput.value = "";
}

// Submit form
const attendanceForm = document.querySelector("form");

// attendanceForm.addEventListener("submit", function () {
    // if (!signatureInput.value) {
    //     signatureInput.value = signatureCanvas.toDataURL("image/png");
    // }

    
//     const existingEntry = confirmedAttendance.find(entry => entry.student === selectedStudent);
//     if (existingEntry) {
//         // Update existing entry
//         existingEntry.signature.push(signatureInput.value);
//         existingEntry.numberOfAttendances++;
//     } else {
//         confirmedAttendance.push({
//             student: selectedStudent,
//             numberOfAttendances: 1,
//             signature: [signatureInput.value]
//         });
//     }
// });

window.addEventListener("load", function() {
    attendanceForm.addEventListener("submit", function(e) {
        const $submitButton = $(this).find('input[type=submit]');
        
        // Get the data-wait value and original value
        const waitText = $submitButton.attr('data-wait');
        const originalText = $submitButton.attr('value');
        
        // Apply wait text and disable the button
        if (waitText) {
          $submitButton.val(waitText).prop('disabled', true);
        }
        e.preventDefault();
        const data = new FormData(attendanceForm);
        const action = e.target.action;
        fetch(action, {
        method: 'POST',
        body: data,
        })
        .then(() => {
        this.reset();
        clearSignature();
        // Apply wait text and disable the button
        if (waitText) {
          $submitButton.val("Send Answer").prop('disabled', false);
        }
        })
    });
});