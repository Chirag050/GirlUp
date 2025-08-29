const scriptURL = "https://script.google.com/macros/s/AKfycbxUDOIz555Ca3dR_6Ha-R8B1QcZ58yhFpNpLZ6n9hDqH-8QdAoFb2gntXo5q-y_z90TOw/exec";
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
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
