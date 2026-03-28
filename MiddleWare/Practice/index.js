const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log("This is a middleware function");
    next();
});
app.use((req, res, next) => {
    console.log("This is another middleware function");
    next();
})
.use((req, res, next) => {
    console.log("This is yet another middleware function");
    next();
})
.use((req, res, next) => {
    console.log("This is the last middleware function");
    res.send("Hello from the last middleware function");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})