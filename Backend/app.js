require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');

// Middleware
app.use(cors()); // Enable CORS for all requests 
app.use(express.json()); // Parse JSON bodies (as sent by API clients) 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (for forms) 
app.use(cookieParser()); // Parse cookies attached to the client request

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes); // Use the user routes for any routes starting with /users
app.use('/captains', require('./routes/captain.routes')); // Use the captain routes for any routes starting with /captains  
module.exports = app;