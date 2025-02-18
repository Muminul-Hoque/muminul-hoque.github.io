document.addEventListener("DOMContentLoaded", function() {
  // Animate the certificate image
  const certificateImg = document.querySelector('.certificate-img');
  if (certificateImg) {
    setTimeout(() => {
      certificateImg.classList.add('show');
    }, 500);
  }
  
  // Animate all achievement images
  const achievementImgs = document.querySelectorAll('.achievement-img');
  achievementImgs.forEach(img => {
    setTimeout(() => {
      img.classList.add('show');
    }, 500);
  });
});
