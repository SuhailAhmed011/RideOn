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