// Create basic Express Server and apply the Route Parameters & Query Parameters.

const express = require('express');
const app = express();

// Route Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Query Parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search Query: ${query}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

