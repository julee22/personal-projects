const form = document.getElementById('my-form');
const attending = document.getElementById('attending');
const mealOpt = document.getElementById('meal-options');

// Fade In animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // optional: run once
      }
    });
  },
  {
    threshold: 0.1 // 10% visible
  }
);

document.addEventListener("scroll", () => {
  document.querySelectorAll('.fade').forEach(el => {
    el.classList.remove("hide");
  });
    
  setTimeout(() => {
    document.querySelectorAll('.fade').forEach(el => {
      observer.observe(el);
    });
  }, "500");
});

document.addEventListener("DOMContentLoaded", () => {

  const submitBtn = document.getElementById("submit-btn");
  const attendanceInput = document.getElementById("attendance-value");
  const sendingCopy = document.getElementById("sending");

  form.reset();

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // STOP page reload / navigation

    submitBtn.classList.add("d-none");
    sendingCopy.classList.remove("d-none");

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data
      });

      const text = await response.text();
      console.log("RAW RESPONSE:", text);

      let json;
      try {
        json = JSON.parse(text);
      } catch {
        alert("Server returned an unexpected response (not JSON).");
        submitBtn.classList.remove("d-none");
        sendingCopy.classList.add("d-none");
        return;
      }

      if (json.result === "success") {
        alert("Thank you for your response!");
        form.reset();
        submitBtn.classList.remove("d-none");
        sendingCopy.classList.add("d-none");
      } else {
        alert("Submission error: " + (json.error || "Unknown error"));
      }

    } catch (error) {
      console.error(error);
      alert("Network or server error occurred.");
    }
  });

});

function showMeal() {
  console.log("changed");
  if (attending.checked) {
  console.log("selected");
    mealOpt.classList.remove("d-none");
  } else {
    mealOpt.classList.add("d-none");
  }
}