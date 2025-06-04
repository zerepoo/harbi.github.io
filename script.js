const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll, .blender-card').forEach(el => {
  observer.observe(el);
});
