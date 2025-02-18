document.addEventListener("DOMContentLoaded", function() {
  // Animate certificate images
  const certificateImgs = document.querySelectorAll('.certificate-img');
  certificateImgs.forEach((img) => {
    setTimeout(() => {
      img.classList.add('show');
    }, 500);
  });
  
  // Animate achievement images
  const achievementImgs = document.querySelectorAll('.achievement-img');
  achievementImgs.forEach((img) => {
    setTimeout(() => {
      img.classList.add('show');
    }, 500);
  });
});
