// Toggle About Me Bio
function toggleBio() {
  const bio = document.getElementById("bio");
  bio.classList.toggle("hidden");
}

// Scroll-triggered animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
});
