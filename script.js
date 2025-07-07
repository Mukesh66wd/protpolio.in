// Toggle menu on click
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // show/hide links
});



// 📦 EmailJS Initialization
emailjs.init("mTgwu-5qMR6j2ywZj"); // 👉 Replace this with your real public key

// 📨 Form submission listener
document.getElementById("hire-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Page reload bondho kore

  // 📤 Send form data via EmailJS
  emailjs.sendForm("service_7kiepvl", "template_qbk2zsn", this)
    .then(function () {
      alert("✅ Message sent successfully!");
    }, function (error) {
      alert("❌ Failed to send: " + JSON.stringify(error));
      console.error("EmailJS error:", error);
    });

  // 🧹 Reset form
  this.reset();
});
