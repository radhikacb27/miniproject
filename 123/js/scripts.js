function fetchRecommendations() {
    fetch('http://localhost:5000/get-recommendations') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById('recommendations');
            recommendationsDiv.innerHTML = ""; // Clear previous recommendations
            data.recommendations.forEach((project, index) => {
                const projectDiv = document.createElement('div');
                projectDiv.className = "recommendation";
                projectDiv.innerHTML = `<strong>Project ${index + 1}:</strong> ${project}`;
                recommendationsDiv.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error fetching recommendations:", error));
}
