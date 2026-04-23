// Show details for featured trips
function showDetails(city) {
    alert(`More details about ${city} trips will be available soon!`);
}

// Trip planner logic
document.getElementById("tripForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const budget = document.getElementById("budget").value;
    const groupSize = document.getElementById("groupSize").value;
    const vibe = document.getElementById("vibe").value;

    let suggestion = "";

    if (vibe === "beach") suggestion = "Miami, San Diego, or Tampa";
    if (vibe === "adventure") suggestion = "Denver, Salt Lake City, or Flagstaff";
    if (vibe === "city") suggestion = "Chicago, Nashville, or Austin";
    if (vibe === "relax") suggestion = "Sedona, Charleston, or Scottsdale";

    document.getElementById("results").innerHTML = `
        <h3>Your Suggested Destinations</h3>
        <p>Based on your budget of $${budget} and group size of ${groupSize}, we recommend:</p>
        <strong>${suggestion}</strong>
    `;
});
