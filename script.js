const scriptURL = "https://script.google.com/macros/s/AKfycbzpojY0QdjRov1J65G47tCn8NUpXT_wHPAeT6AyB1AJhMA75WPSiTDpVpN8pIni_lYdBw/exec"; // Replace with your Apps Script deployment URL
const form = document.getElementById("girlupForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "⏳ Submitting...";

  try {
    const formData = new FormData(form);
    const response = await fetch(scriptURL, { method: "POST", body: formData });
    const result = await response.json();

    if (result.result === "duplicate") {
      status.textContent = "⚠️ You have already submitted a response with this email.";
    } else if (result.result === "success") {
      status.textContent = "✅ Submitted successfully!";
      form.reset();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      status.textContent = "❌ Error: " + result.message;
    }
  } catch (err) {
    status.textContent = "❌ Network error: " + err.message;
  }
});
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
