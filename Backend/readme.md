# Backend API Documentation: `/users/signup`

## Endpoint Description
The `/users/signup` endpoint is used to register a new user into the system. The password provided by the user is securely hashed using `bcrypt`, and a JSON Web Token (JWT) is generated upon successful registration.

---

## HTTP Method
**POST**

---

## Request URL
/users/signup

yaml
Copy code

---

## Request Body

### Expected Data
The request body must be in JSON format with the following required fields:

| Field       | Type     | Description                          |
|-------------|----------|--------------------------------------|
| `firstName` | `string` | The first name of the user.          |
| `lastName`  | `string` | The last name of the user.           |
| `email`     | `string` | The email address of the user.       |
| `password`  | `string` | The plain text password for the account (it will be hashed). |

### Example Request Body
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "SecurePassword123"
}
Security Details
Password Hashing:

Passwords are hashed using bcrypt before being stored in the database. This ensures the user's password is not stored in plain text, improving security.
JWT Generation:

After successful registration, a JWT is generated and sent to the user. This token can be used for authentication in subsequent requests.
Response
Success Response
Status Code: 201 Created
Description: The user was successfully registered, and a JWT token was issued.
Example Response Body:

json
Copy code
{
  "message": "User registered successfully!",
  "user": {
    "id": "abc123",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
Error Responses
1. Missing Required Fields
Status Code: 400 Bad Request
Description: The request is missing one or more required fields.
Example Response Body:

json
Copy code
{
  "error": "Missing required field(s): firstName, lastName, email, password"
}
2. Email Already Exists
Status Code: 409 Conflict
Description: The provided email is already in use.
Example Response Body:

json
Copy code
{
  "error": "Email is already registered."
}
3. Server Error
Status Code: 500 Internal Server Error
Description: Something went wrong on the server.
Example Response Body:

json
Copy code
{
  "error": "An unexpected error occurred. Please try again later."
}


Additional Notes:

The password field should not be logged or returned in any response for security reasons.
The JWT token should be stored securely on the client side (e.g., in an HTTP-only cookie or local storage).

Always send the request body in JSON format.
Use the generated JWT token in subsequent API requests for authentication purposes.
Dependencies
To ensure proper functionality, make sure the following dependencies are installed in your project:

bcrypt for password hashing.
jsonwebtoken for token generation.



#Login Route  `/users/login`


## Overview
This API allows users to sign up and log in. Below are the details for the `/users/signup` and `/users/login` endpoints.

---

## Endpoints

### 1. User Signup

**Method:** `POST`  
**Endpoint:** `/users/signup`

**Description:**  
Allows a user to register for the service by providing their email and password.

**Request Body:**  
- `email` (string): User's email address. Must be unique.  
- `password` (string): User's password. Minimum 6 characters recommended.

**Responses:**  
- **201 Created:**  
  Message: "User registered successfully."  

- **400 Bad Request:**  
  Error: "Email already exists."

---

### 2. User Login

**Method:** `POST`  
**Endpoint:** `/users/login`

**Description:**  
Allows a registered user to log in by providing their email and password.

**Request Body:**  
- `email` (string): User's registered email address.  
- `password` (string): User's password.

**Responses:**  
- **200 OK:**  
  Message: "Login successful."  
  Token: "jwt-token-here"  

- **401 Unauthorized:**  
  Error: "Invalid email or password."  

- **404 Not Found:**  
  Error: "User not registered. Please sign up first."

---

## Error Handling

### Common Errors
- **400 Bad Request:** Invalid data in the request body (e.g., missing fields, invalid email format).  
- **401 Unauthorized:** Incorrect email or password during login.  
- **404 Not Found:** Trying to log in without signing up.

---

## Sample Request and Response

### Signup Example  
**Request:**  
`POST /users/signup`  
Body:  
`{ "email": "user@example.com", "password": "securepassword123" }`

**Response:**  
`{ "message": "User registered successfully." }`

---

### Login Example  
**Request:**  
`POST /users/login`  
Body:  
`{ "email": "user@example.com", "password": "securepassword123" }`

**Response:**  
`{ "message": "Login successful.", "token": "jwt-token-here" }`

---

## Authentication Notes
- The token returned during login should be sent in the `Authorization` header with the format `Bearer <token>` for accessing protected routes.  
- Example:  
  `Authorization: Bearer jwt-token-here`

---


