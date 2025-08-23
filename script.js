  // Form submission to Google Apps Script
    document.getElementById("girlupForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const form = e.target;
      const data = new FormData(form);
      const action = "https://script.google.com/macros/s/AKfycbxNFXaGPdOxVW5RNqZRyzyg7EXtP9wVYDMLTa1AQLjA-VhA7dYEY_N5YjX0wXk2K4cJiQ/exec";

      fetch(action, { method: "POST", body: data })
        .then(() => {
          document.getElementById("status").innerText = "✅ Thank you! Your response has been submitted.";
          form.reset();

          // scroll to bottom after submit
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        })
        .catch(() => {
          document.getElementById("status").innerText = "❌ Something went wrong. Please try again.";
        });
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


