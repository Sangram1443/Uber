# User Authentication API

This API provides user authentication functionality, including user registration and login. It is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Endpoints](#endpoints)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Logout User](#logout-user)
  - [User Profile](#user-profile)
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

### Validation:

email: Must be a valid email address & must be present in the database  
password: Must match with the password of the corresponding email.

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

### Logout User

Authenticates the JWT_token and token is blacklisted(added to the BlacklistedToken database).

- **URL**: `/users/logout`
- **Method**: `POST`
- **Request Header**:
  -Authorization: Bearer JWT_token

### Validation:

- The JWT_token must not be blacklisted already and must be valid.

- **Response:**
  **Success:**
  ```json
  {
    "Logged out successfully"
  }
  ```

### User Profile

Authenticates the JWT token sent by the login route by checking if it is present in the BlacklistedToken database. If not blacklisted then shows the profile for the user.

- **URL**: `/users/profile`
- **Method**: `GET`
- **Request Header**:
  -Authorization: Bearer JWT_token

### Validation:

The token must not be blacklisted.

- **Response:**
  **Success:**
  ```json
    {
      "User Profile"
    }
  ```

### Register Captain

Registers a new Captain in the system.

- **URL**: `/captains/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
  	"fullname": {
  		"firstname": "John",
  		"lastname": "Doe"
  	},
  	"email": "john.doe@example.com",
  	"password": "password123",
  	"phone": "1234567890",
  	"vehicleType": "car",
  	"vehicleColor": "red",
  	"passengerCapacity": 4,
  	"numberPlate": "ABC1234"
  }
  ```

### Validation:

firstname: Must be at least 3 characters long.  
email: Must be a valid email address.  
password: Must be at least 6 characters long.  
phone: Must be a valid phone number & not previously registered.
vehicleType: Must be one of the predefined vehicle types (e.g., car, bike , auto).  
vehicleColor: Must be a valid color string.  
passengerCapacity: Must be a positive integer.  
numberPlate: Must be a valid number plate format & not previously registered.

### Login Captain

Authenticates a Captain and returns a JWT token.

- **URL**: `/captains/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
  	"email": "john.doe@example.com",
  	"password": "password123"
  }
  ```

### Validation:

email: Must be a valid email address & must be present in the database  
password: Must match with the password of the corresponding email.

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

### Logout Captain

Authenticates the JWT_token and token is blacklisted(added to the BlacklistedToken database).

- **URL**: `/captains/logout`
- **Method**: `POST`
- **Request Header**:
  -Authorization: Bearer JWT_token

### Validation:

- The JWT_token must not be blacklisted already and must be valid.

- **Response:**
  **Success:**
  ```json
  {
    "Logged out successfully"
  }
  ```

### Captain Profile

Authenticates the JWT token sent by the login route by checking if it is present in the BlacklistedToken database. If not blacklisted then shows the profile for the captain.

- **URL**: `/captains/profile`
- **Method**: `GET`
- **Request Header**:
  -Authorization: Bearer JWT_token

### Validation:

The token must not be blacklisted.

- **Response:**
  **Success:**
  ```json
    {
      "Captain Profile"
    }
  ```

### Error Handling

- Validation Errors: If the request body fails validation, a 400 Bad Request response is returned with an array of error messages.

- Invalid Credentials: If the email or password is incorrect during login, a 404 Not Found or 400 Bad Request response is returned with an error message.
