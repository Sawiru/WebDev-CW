document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector("nav ul").classList.toggle("show");
});

function redirectToVolunteer() {
    window.location.href = "volunteer.html";
}