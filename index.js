// Simple Web Server using Express

const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my simple web server.');
});

// Choose server port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

