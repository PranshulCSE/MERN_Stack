// Fixed-window rate limiter middleware using Redis
// - increments a counter per IP using INCR
// - sets TTL when the key is created
// - returns HTTP 429 when the limit is exceeded

const redis = require('redis');

// Create a Redis client if one isn't provided elsewhere in the app.
// If your app already creates and exports a connected redis client,
// replace this with `const redisClient = require('./path/to/redisClient')`.
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.error('Redis Client Error', err));
(async () => {
    try {
        await redisClient.connect();
    } catch (e) {
        console.error('Failed to connect Redis client in RateLimiter:', e.message || e);
    }
})();

const MAX_REQUESTS = 50; // allowed requests per window
const WINDOW_SECONDS = 60; // window length in seconds

const RateLimiter = async function (req, res, next) {
    try {
        const ip = req.ip || req.headers['x-forwarded-for'] || req.connection?.remoteAddress;

        // INCR returns the incremented value (1 if key did not exist)
        const counter = await redisClient.incr(ip);

        // If this is the first request in the window, set the expiry
        if (counter === 1) {
            await redisClient.expire(ip, WINDOW_SECONDS);
        }

        if (counter > MAX_REQUESTS) {
            return res.status(429).json({ error: 'Too many requests. Please try again later.' });
        }

        return next();
    } catch (err) {
        // On Redis error, fail-open (allow request) or fail-closed depending on policy.
        // Here we pass the error to next() so the app can decide. Avoid sending raw errors to clients.
        console.error('RateLimiter error:', err);
        return next(err);
    }
};

module.exports = RateLimiter;