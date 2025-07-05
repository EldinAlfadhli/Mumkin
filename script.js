
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Placeholder for language switching
document.querySelectorAll('.lang-options a').forEach(langLink => {
  langLink.addEventListener('click', function(e) {
    // Future logic can be added here to store language preference
    console.log('Language selected:', this.textContent.trim());
  });
});

// Optional: Add event listeners for future features (e.g., modal, toggle menu)
