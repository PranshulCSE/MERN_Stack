const express = require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Welcome on the HomePage");
})
app.get("/Search",(req,res)=>{
    res.send(`Welcome Mr./Ms. ${req.query.name}`);
})
app.listen(3100,()=>{
    console.log(`Server is running on the port http://localhost:3100/`);
})