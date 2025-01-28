# User Authentication API

This API provides user authentication functionality, including user registration and login. It is built using Node.js, Express.js, and MongoDB.

## Table of Contents
- [Endpoints](#endpoints)
    - [Register User](#register-user)
    - [Login User](#login-user)
- [Request and Response Examples](#request-and-response-examples)
    - [Register User](#register-user-example)
    - [Login User](#login-user-example)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)

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
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }