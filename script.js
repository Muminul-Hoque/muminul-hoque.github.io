document.addEventListener("DOMContentLoaded", function() {
  // Animate certificate images
  const certificateImgs = document.querySelectorAll('.certificate-img');
  certificateImgs.forEach((img, index) => {
    // Optionally stagger animation by index
    setTimeout(() => {
      img.classList.add('show');
    }, 500 + index * 100);
  });
  
  // Animate achievement images
  const achievementImgs = document.querySelectorAll('.achievement-img');
  achievementImgs.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add('show');
    }, 500 + index * 100);
  });

  // Ensure EmailJS is loaded
  if (typeof emailjs === "undefined") {
      console.error("❌ EmailJS is not loaded. Check your script URL.");
      return;
  }
  
  // Initialize EmailJS with your Public Key
  emailjs.init("7B41n6u7zbXKI-ld9"); // Replace with your actual EmailJS Public Key

  // Define the sendEmail function
  function sendEmail(visitorId) {
    const params = {
      to_email: "muminul950@gmail.com",  // Replace with your email
      subject: "Visitor ID Notification",
      message: "A visitor with ID " + visitorId + " just visited your portfolio."
    };

    emailjs.send("service_d0c3u1s", "template_f9eecgi", params) // Replace with your Service & Template IDs
      .then(function(response) {
          console.log('✅ Email sent successfully:', response);
      })
      .catch(function(error) {
          console.error('❌ Error sending email:', error);
      });
  }

  // Check URL for "id" parameter and trigger email if found
  const urlParams = new URLSearchParams(window.location.search);
  const visitorId = urlParams.get('id');
  if (visitorId) {
    sendEmail(visitorId);
  } else {
    console.log("No visitor ID found in the URL.");
  }
});
