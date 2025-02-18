document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".certificate-img");

  setTimeout(() => {
    images.forEach(img => img.classList.add("show"));
  }, 500);  // Delay for smooth animation
});
