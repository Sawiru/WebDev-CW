document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});

function redirectToVolunteer() {
    window.location.href = "volunteer.html";
}