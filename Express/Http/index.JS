const express =require("express");
const app=express();

app.get("/home",(req,res)=>{
    const username=req.query.username;
    res.send(`Welcome to Home Page ${username}`);
})

app.get("/search",(req,res)=>{
    const username=req.query.username;
    res.send(`You are on Search Page!!  ${username}`);
})

app.listen(3000,()=>{
    console.log(`Server is Listening at port 3000`);
});