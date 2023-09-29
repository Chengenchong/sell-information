// script.js

// Function to handle button click for sliding animation
function handleButtonClick(buttonId) {
    // Perform actions based on the button clicked
    console.log(`Button ${buttonId} clicked`);

    // Toggle the "active" class on the buttons
    document.getElementById("showTrending").classList.remove("active");
    document.getElementById("showNews").classList.remove("active");
    document.getElementById(buttonId).classList.add("active");
}

// Function to handle table display toggling
function toggleTable(tableId) {
    const trendingSection = document.getElementById("trending-section");
    const newsSection = document.getElementById("news-section");

    if (tableId === "trending-table") {
        trendingSection.style.display = "block";
        newsSection.style.display = "none";
    } else if (tableId === "new-table") {
        trendingSection.style.display = "none";
        newsSection.style.display = "block";
    }
}

// Show the "Trending" table by default
document.getElementById("showTrending").classList.add("active");
toggleTable("trending-table");

// Add event listeners to the buttons in your HTML for sliding animation
document.getElementById("showTrending").addEventListener("click", function () {
    handleButtonClick("showTrending");
    toggleTable("trending-table");
});

document.getElementById("showNews").addEventListener("click", function () {
    handleButtonClick("showNews");
    toggleTable("new-table");
});
