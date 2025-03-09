
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const profileAvatar = document.querySelector(".profile-avatar");

  fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];

      if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
              profileAvatar.src = e.target.result;
              localStorage.setItem("profileImage", e.target.result); // Save to local storage
          };

          reader.readAsDataURL(file);
      }
  });

  // Load saved image from local storage (if any)
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
      profileAvatar.src = savedImage;
  }
});
