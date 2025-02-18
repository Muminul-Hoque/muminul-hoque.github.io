document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".achievement-img");

  setTimeout(() => {
    images.forEach(img => img.classList.add("show"));
  }, 500);  // Adds delay for smooth animation
});

