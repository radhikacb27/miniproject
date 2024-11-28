function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Mock authentication for demo purposes
    if (username === "test" && password === "1234") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
