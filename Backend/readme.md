# RideOn Backend API Documentation

## Overview
This API allows users to sign up and log in. Below are the details for the `/users/signup` and `/users/login` endpoints.

---

## /users/signup Endpoint

### Description:
The `/users/signup` endpoint is used to register a new user into the system. The password provided by the user is securely hashed using bcrypt, and a JSON Web Token (JWT) is generated upon successful registration.

### HTTP Method:
`POST`

### Request URL:
`/users/signup`

### Request Body:
The request body must be in JSON format with the following required fields:

| Field      | Type    | Description                                      |
|------------|---------|--------------------------------------------------|
| `firstName`| string  | The first name of the user.                      |
| `lastName` | string  | The last name of the user.                       |
| `email`    | string  | The email address of the user.                   |
| `password` | string  | The plain text password for the account (it will be hashed). |

**Example Request Body:**
{ "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "password": "SecurePassword123" }



### Security Details:
- **Password Hashing**:  
  Passwords are hashed using bcrypt before being stored in the database, ensuring the user's password is not stored in plain text, improving security.

- **JWT Generation**:  
  After successful registration, a JWT is generated and sent to the user. This token can be used for authentication in subsequent requests.

### Response:

**Success Response:**
- **Status Code:** 201 Created
- **Description:** The user was successfully registered, and a JWT token was issued.

**Example Response Body:**
{ "message": "User registered successfully!", "user": { "id": "abc123", "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com" }, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }



**Error Responses:**

1. **Missing Required Fields**
   - **Status Code:** 400 Bad Request
   - **Description:** The request is missing one or more required fields.

   **Example Response Body:**
{ "error": "Missing required field(s): firstName, lastName, email, password" }



2. **Email Already Exists**
- **Status Code:** 409 Conflict
- **Description:** The provided email is already in use.

**Example Response Body:**
{ "error": "Email is already registered." }


3. **Server Error**
- **Status Code:** 500 Internal Server Error
- **Description:** Something went wrong on the server.

**Example Response Body:**
{ "error": "An unexpected error occurred. Please try again later." }



### Additional Notes:
- The password field should not be logged or returned in any response for security reasons.
- The JWT token should be stored securely on the client side (e.g., in an HTTP-only cookie or local storage).
- Always send the request body in JSON format.
- Use the generated JWT token in subsequent API requests for authentication purposes.

### Dependencies:
- `bcrypt` for password hashing.
- `jsonwebtoken` for token generation.

---

## /users/login Endpoint

### Description:
The `/users/login` endpoint allows a registered user to log in by providing their email and password.

### HTTP Method:
`POST`

### Request URL:
`/users/login`

### Request Body:
The request body must be in JSON format with the following fields:

| Field    | Type    | Description                          |
|----------|---------|--------------------------------------|
| `email`  | string  | User's registered email address.     |
| `password` | string | User's password.                     |

**Example Request Body:**
{ "email": "user@example.com", "password": "securepassword123" }



### Responses:
- **Success Response:**
  - **Status Code:** 200 OK
  - **Description:** Login successful and JWT token returned.

  **Example Response Body:**
{ "message": "Login successful.", "token": "jwt-token-here" }



- **Error Responses:**

- **Invalid Email or Password**
  - **Status Code:** 401 Unauthorized
  - **Description:** Incorrect email or password during login.

  **Example Response Body:**
  ```
  {
    "error": "Invalid email or password."
  }
  ```

- **User Not Registered**
  - **Status Code:** 404 Not Found
  - **Description:** Trying to log in without signing up.

  **Example Response Body:**
  ```
  {
    "error": "User not registered. Please sign up first."
  }
  ```

---

## Error Handling

### Common Errors:
- **400 Bad Request**: Invalid data in the request body (e.g., missing fields, invalid email format).
- **401 Unauthorized**: Incorrect email or password during login.
- **404 Not Found**: Trying to log in without signing up.

---

## Sample Request and Response

### Signup Example

**Request:**
POST /users/signup



**Body:**
{ "email": "user@example.com", "password": "securepassword123" }



**Response:**
{ "message": "User registered successfully." }



---

### Login Example

**Request:**
POST /users/login



**Body:**
{ "email": "user@example.com", "password": "securepassword123" }



**Response:**
{ "message": "Login successful.", "token": "jwt-token-here" }



---

## Authentication Notes:
- The token returned during login should be sent in the `Authorization` header with the format `Bearer <token>` for accessing protected routes.

**Example:**
Authorization: Bearer jwt-token-here


