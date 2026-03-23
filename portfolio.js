/* ===============================
   Dark / Light Mode Toggle
================================ */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

 /* --- SKILL BAR ANIMATION --- */
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });

/* ===============================
   Contact Form Validation
================================ */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    form.reset();
});

