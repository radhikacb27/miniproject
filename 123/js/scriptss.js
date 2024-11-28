function register() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Send registration data to backend
    fetch('http://localhost:5000/register', { // Replace with your API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registration successful! Please login.");
            window.location.href = "index.html"; // Redirect to login page
        } else {
            alert("Registration failed: " + data.message);
        }
    })
    .catch(error => console.error("Error during registration:", error));
}
