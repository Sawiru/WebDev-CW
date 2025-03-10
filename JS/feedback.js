
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default submission

    let valid = true;
    const requiredFields = document.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'red';
        } else {
          field.style.borderColor = '#ccc';
        }
      });

      if (!valid) {
        alert('Please fill out all required fields.');
        return;
      }

      alert("Thank you for your feedback!");
      window.location.href = "thankyou.html"; // Redirects after submission
    });
