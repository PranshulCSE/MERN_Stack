const express = require('express');
const app = express();
const connectToDatabase = require('./Configuration/Database');
const userModel = require('./Models/UserModel');

app.use(express.json());
connectToDatabase();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})