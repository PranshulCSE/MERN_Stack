// Main Server File - Entry point of the application
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import Routes
const userRoutes = require('./Routes/UserRoutes');

// Import Middlewares
const logger = require('./Middlewares/Logger');
const errorHandler = require('./Middlewares/ErrorHandler');

// Initialize Express App
const app = express();

// ==================== MIDDLEWARES ====================

// Body Parser Middleware - Parse incoming request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Middleware - Enable Cross-Origin requests
app.use(cors());

// Logger Middleware - Log all requests
app.use(logger);

// ==================== DATABASE CONNECTION ====================

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

connectDB();

// ==================== API ROUTES ====================

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to MVC Backend API',
        version: '1.0.0',
        endpoints: {
            getAll: 'GET /api/users',
            getById: 'GET /api/users/:id',
            create: 'POST /api/users',
            update: 'PATCH /api/users/:id',
            delete: 'DELETE /api/users/:id'
        }
    });
});

// User API Routes
app.use('/api/users', userRoutes);

// 404 Route Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error Handler Middleware (Must be last)
app.use(errorHandler);

// ==================== SERVER STARTUP ====================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════╗
║  🚀 Server Running on Port ${PORT} ║
║  📝 MVC Backend with Express       ║
║  🗄️  MongoDB Integrated            ║
╚════════════════════════════════════╝
  `);
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Rejection:', err.message);
    process.exit(1);
});
