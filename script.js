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
 
document.addEventListener("DOMContentLoaded", function() {
  // Check if EmailJS is loaded and then initialize it
  if (typeof emailjs === "undefined") {
      console.error("❌ EmailJS is not loaded. Check your script URL.");
      return;
  }
  emailjs.init("7B41n6u7zbXKI-ld9"); // Replace with your actual EmailJS Public Key

  // Define the sendEmail function
  function sendEmail(visitorId) {
    var params = {
      to_email: "muminul950@gmail.com",  // Replace with your email
      subject: "Visitor ID Notification",
      message: "A visitor with ID " + visitorId + " just visited your portfolio."
    };

    emailjs.send("service_d0c3u1s", "template_f9eecgi", params) // Replace with your actual Service & Template IDs
      .then(function(response) {
          console.log('✅ Email sent successfully:', response);
      }, function(error) {
          console.error('❌ Error sending email:', error);
      });
  }

  // Get the "id" parameter from the URL and send an email if it exists
  const urlParams = new URLSearchParams(window.location.search);
  const visitorId = urlParams.get('id');
  if (visitorId) {
    sendEmail(visitorId);
  }
});
