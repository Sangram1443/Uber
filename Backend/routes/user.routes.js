const express = require('express');
const router = express.Router();
const {body} = require('express-validator'); // Validate the request body before sending it to the controller
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('fullname.firstname').isLength({min: 3}).withMessage('Name should be atleast 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('Password should be atleast 6 characters long'),
], userController.registerUser);   // Register route

router.post('/login', userController.loginUser); // Login route

module.exports = router;

