require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

// Middleware
app.use(cors()); // Enable CORS for all requests 
app.use(express.json()); // Parse JSON bodies (as sent by API clients) 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (for forms) 

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes); // Use the user routes for any routes starting with /users

module.exports = app;