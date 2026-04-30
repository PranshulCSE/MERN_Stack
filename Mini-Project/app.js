
const express = require('express');
const connectDB = require('./config/db');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
