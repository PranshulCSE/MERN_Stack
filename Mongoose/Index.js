const express = require('express');
const app = express();
const connectToDatabase = require('./Configuration/Database');
const userRoutes = require('./Routes/Insta');

app.use(express.json());
app.use('/api', userRoutes);
connectToDatabase();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})