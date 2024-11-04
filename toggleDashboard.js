document.addEventListener("mousemove", (event) => {
    const dashboard = document.querySelector(".dashboard");
    
    // Check if the mouse is within 100px from the top of the window
    if (event.clientY <= 50) {
        dashboard.style.display = "block"; // Show the dashboard
    } else {
        dashboard.style.display = "none"; // Hide the dashboard
    }
});
