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
      console.error("EmailJS not loaded");
  } else {
      // Initialize EmailJS with your Public Key
      emailjs.init("7B41n6u7zbXKI-ld9"); // Replace with your actual EmailJS Public Key

      // Function to send email
      function sendEmail(locationData) {
          const params = {
              to_email: "muminul950@gmail.com",  // Replace with your email
              subject: "New Visitor Location Tracked",
              message: `A visitor just visited your website. 
                        Location: ${locationData.city}, ${locationData.region}, ${locationData.country} 
                        IP Address: ${locationData.ip}`
          };

          emailjs.send("service_d0c3u1s", "template_f9eecgi", params) // Replace with your Service & Template IDs
              .then(function(response) {
                  //console.log('Email sent successfully', response);
              })
              .catch(function(error) {
                  //console.error('Email sending failed', error);
              });
      }

    function trackVisitorLocation() {
    fetch("https://ipinfo.io/json?token=2215e8e7158689")  // Replace YOUR_TOKEN with a free API key
        .then(response => response.json())
        .then(data => {
            //console.log("Visitor Location:", data);

            sendEmail({
                city: data.city,
                region: data.region,
                country: data.country,
                ip: data.ip
            });
        })
        .catch(error => console.error("Geolocation API error:", error));
}

      // Call function on page load
      trackVisitorLocation();
  }
});  
const certificateImgs = document.querySelectorAll('.certificate-img');
  certificateImgs.forEach((img, index) => {
    setTimeout(() => { img.classList.add('show'); }, 500 + index * 100);
  });

  const achievementImgs = document.querySelectorAll('.achievement-img');
  achievementImgs.forEach((img, index) => {
    setTimeout(() => { img.classList.add('show'); }, 500 + index * 100);
  });

  if (typeof emailjs === "undefined") {
      console.error("EmailJS not loaded");
  } else {
      emailjs.init("7B41n6u7zbXKI-ld9");

      function sendEmail(locationData) {
          const params = {
              to_email: "muminul950@gmail.com",
              subject: "New Visitor Location Tracked",
              message: `Visitor location: ${locationData.city}, ${locationData.region}, ${locationData.country}, IP: ${locationData.ip}`
          };
          emailjs.send("service_d0c3u1s", "template_f9eecgi", params)
              .then(response => {})
              .catch(error => {});
      }

      function trackVisitorLocation() {
          fetch("https://ipinfo.io/json?token=2215e8e7158689")
              .then(response => response.json())
              .then(data => sendEmail(data))
              .catch(error => console.error("Geolocation API error:", error));
      }

      trackVisitorLocation();
  }

  // --- NEW DARK/LIGHT MODE FUNCTIONALITY ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set default theme based on device
  document.body.classList.toggle("dark-mode", prefersDark);

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
});
