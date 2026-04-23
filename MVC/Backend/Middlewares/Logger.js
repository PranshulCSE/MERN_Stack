// Logger Middleware - Logs incoming requests
const logger = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.path}`);
    next();
};

module.exports = logger;
