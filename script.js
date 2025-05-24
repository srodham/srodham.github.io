function toggleBio() {
  const bio = document.getElementById("bio");
  bio.classList.toggle("hidden");
}

// Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Trigger reveal on page load for visible elements
window.dispatchEvent(new Event('scroll'));
