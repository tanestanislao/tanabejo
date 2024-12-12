const express = require('express');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/booksRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use books routes
app.use('/api', booksRoutes);

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});