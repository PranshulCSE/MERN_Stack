// /Understanding the JWT Tokens & Cookies Concept

// JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization purposes in web applications. A JWT consists of three parts: a header, a payload, and a signature. The header typically contains the type of token and the signing algorithm used. The payload contains the claims or data that you want to transmit, such as user information or permissions. The signature is created by encoding the header and payload and signing it with a secret key.
// Cookies, on the other hand, are small pieces of data that are stored on the client's browser. They are commonly used to store session information or user preferences. When a user logs in to a web application, the server can create a JWT and send it back to the client as a cookie. The client can then include this cookie in subsequent requests to the server, allowing the server to authenticate the user and authorize access to protected resources.
// How to assign token its syntax and working
// To assign a JWT token, you typically follow these steps: 
// 1. User Authentication: When a user logs in to your application, you authenticate their credentials (e.g., username and password) against your database.
// 2. Token
//     Creation: If the authentication is successful, you create a JWT token. This involves creating a header, payload, and signature. The header usually contains the type of token (JWT) and the signing algorithm (e.g., HS256). The payload contains the claims or data you want to include in the token, such as user ID or roles. Finally, you sign the token using a secret key.
// 3. Token Transmission: Once the token is created, you can send it back to the client. This is often done by including the token in the response body or by setting it as a cookie.  

// 4. Token Storage: The client can store the token in local storage, session storage, or as a cookie. This allows the client to include the token in subsequent requests to the server for authentication and authorization purposes.
// 5. Token    Verification: When the client makes a request to a protected resource, it includes the JWT token in the request header (usually in the Authorization header). The server then verifies the token by checking its signature and validating its claims. If the token is valid, the server grants access to the requested resource; otherwise, it returns an error response (e.g., 401 Unauthorized).
// // In summary, JWT tokens are a secure way to transmit information between parties, and they can be used in conjunction with cookies to manage user sessions and authentication in web applications.        

// Lets go through the code
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

// Secret key for signing the JWT
const secretKey = 'your_secret_key';
// Route for user login and token generation
app.post('/login', (req, res) => {
  const { username, password } = req.body;  
    // In a real application, you would validate the username and password against your database
    if (username === 'user' && password === 'password') {
    // Create a JWT token with the user's information
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    // Send the token back to the client
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
// Middleware to verify the JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);   
    jwt.verify(token, secretKey, (err, user) => {   
    if (err) return res.sendStatus(403);    
    req.user = user;
    next();
  }

);
// Protected route that requires authentication 
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 
