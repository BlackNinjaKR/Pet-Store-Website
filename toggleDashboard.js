let lastScrollY = window.scrollY;

document.addEventListener("mousemove", (event) => {
    const dashboard = document.querySelector(".dashboard");

    // Show dashboard if the mouse is within the top 5px of the viewport
    if (event.clientY <= 50 && lastScrollY <= 0) {
        dashboard.style.display = "block"; // Show the dashboard
    } else {
        dashboard.style.display = "none"; // Hide the dashboard
    }
});

window.addEventListener("scroll", () => {
    const heroSection = document.querySelector(".hero");
    const backToTopButton = document.getElementById("backToTop");

    // Check if the user has scrolled past the hero section
    if (window.scrollY > heroSection.offsetHeight) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
});

// Scroll to the top when the button is clicked
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

