const toggleButton = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
  toggleButton.textContent = theme === "dark" ? "🌞" : "🌙";
}

// Toggle on button click
toggleButton?.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Set theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
});
