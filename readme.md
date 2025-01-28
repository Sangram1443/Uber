# User Authentication API

This API provides user authentication functionality, including user registration and login. It is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Endpoints](#endpoints)
  - [Register User](#register-user)
  - [Login User](#login-user)
- [Error Handling](#error-handling)

---

## Endpoints

### Register User

Registers a new user in the system.

- **URL**: `/users/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
  	"fullname": {
  		"firstname": "John",
  		"lastname": "Doe"
  	},
  	"email": "john.doe@example.com",
  	"password": "password123"
  }
  ```

### Validation:

fullname.firstname: Must be at least 3 characters long.  
email: Must be a valid email address.  
password: Must be at least 6 characters long.

- **Response:**
  **Success:**
  ```json
  {
  	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  	"user": {
  		"_id": "64f1b2c3e4b0f5a3d4f5e6g7",
  		"fullname": {
  			"firstname": "John",
  			"lastname": "Doe"
  		},
  		"email": "john.doe@example.com",
  		"socketId": null
  	}
  }
  ```

### Login User
Authenticates a user and returns a JWT token.
- **URL**: `/users/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
 
- **Response:**
  **Success:**
  ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
        "\_id": "64f1b2c3e4b0f5a3d4f5e6g7",
        "fullname": {
        "firstname": "John",
        "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
        }
    }

### Error Handling
- Validation Errors: If the request body fails validation, a 400 Bad Request response is returned with an array of error messages.

- Invalid Credentials: If the email or password is incorrect during login, a 404 Not Found or 400 Bad Request response is returned with an error message.
