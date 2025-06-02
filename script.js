document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  });
});

function toggleBio() {
  const bio = document.getElementById("bio");
  bio.classList.toggle("hidden");
}
