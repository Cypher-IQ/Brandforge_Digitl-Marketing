const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2, // Element becomes visible when 20% is in viewport
  }
);

window.addEventListener("DOMContentLoaded", () => {
  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
});
