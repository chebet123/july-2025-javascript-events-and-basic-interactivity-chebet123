// Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "🎉 You clicked the button! Welcome to interactive web pages!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  let messages = [];
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate name
  if (name.length < 3) {
    messages.push("❌ Name must be at least 3 characters.");
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messages.push("❌ Please enter a valid email.");
  }

  // Validate password strength
  if (password.length < 6) {
    messages.push("❌ Password must be at least 6 characters.");
  }

  // Validate password match
  if (password !== confirmPassword) {
    messages.push("❌ Passwords do not match.");
  }

  // Show messages
  const formMessages = document.getElementById("formMessages");
  if (messages.length > 0) {
    formMessages.style.color = "red";
    formMessages.innerHTML = messages.join("<br>");
  } else {
    formMessages.style.color = "green";
    formMessages.textContent = "✅ Form submitted successfully!";
  }
});
