// auth.js - display only "Authentication successful" if correct
function authenticateUser(username, password) {
    if (username === "alice" && password === "1234") {
        console.log("Authentication successful");
    }
}

// Test
authenticateUser("alice", "1234"); // Will display: Authentication successful
authenticateUser("bob", "abcd");   // Will display nothing

