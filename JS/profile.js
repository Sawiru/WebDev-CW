
    // Handle the image selection
    document.getElementById('fileInput').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById('profileImage').src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
  });

  window.onload = function() {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (username) {
        document.getElementById("userName").innerText = username;
    }
    if (email) {
        document.getElementById("userEmail").innerText = email;
    }
};
