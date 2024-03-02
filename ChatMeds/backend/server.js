// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Enable CORS middleware
app.use(cors());

// Define route handlers
app.get('/api/symptoms', (req, res) => {
  // Handle GET request for '/api/symptoms' endpoint
  // Your logic here...
  res.send('GET request for /api/symptoms endpoint');
});

app.post('/api/consultation', (req, res) => {
  // Handle POST request for '/api/consultation' endpoint
  // Your logic here...
  res.send('POST request for /api/consultation endpoint');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});