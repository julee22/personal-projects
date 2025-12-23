const form = document.getElementById('my-form');

document.addEventListener("DOMContentLoaded", () => {

  form.reset();

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // STOP page reload / navigation

    const submitBtn = document.getElementById("submit-btn");
    submitBtn.value = "Sending...";
    submitBtn.disabled = true;

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
        submitBtn.value = "Submit";
        submitBtn.disabled = false;
        return;
      }

      if (json.result === "success") {
        alert("Delighted you can make it!");
        form.reset();
      } else {
        alert("Submission error: " + (json.error || "Unknown error"));
      }

    } catch (error) {
      console.error(error);
      alert("Network or server error occurred.");
    }

    submitBtn.value = "Submit";
    submitBtn.disabled = false;
  });

});
