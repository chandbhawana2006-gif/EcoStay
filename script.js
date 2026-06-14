// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to EcoStay!");
};

// Function for button click
function showMessage() {
    alert("Thank you for visiting EcoStay! Explore sustainable travel with us.");
}

// Highlight section when clicked
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            this.style.transform = "scale(1.02)";
            this.style.transition = "0.3s";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 300);
        });
    });
});