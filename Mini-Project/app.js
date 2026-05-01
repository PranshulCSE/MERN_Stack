
const express = require('express');
const connectDB = require('./config/db');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());


// Routes
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
