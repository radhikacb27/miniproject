<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $username = $_POST['username'];  // Get the username
    $skills = $_POST['selectedSkills'];  // Get the skills (comma-separated)

    // Database credentials
    $servername = "localhost";
    $dbusername = "root";   // Default username for MySQL in XAMPP
    $dbpassword = "";       // Default password for MySQL in XAMPP
    $dbname = "user_skills";  // Your database name

    // Create connection
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (username, skills) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $skills);  // "ss" means two string parameters

    // Execute the query
    if ($stmt->execute()) {
        echo "Skills submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
