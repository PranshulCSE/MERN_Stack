const express= require('express');
const app = express();

app.use("/abou?t",(req,res)=>{
    res.send("Hello from the about Page");
})
// Here in the above path when we are writing ? that means character before ? will become Optional
// i.e if you will go to path /abot will also show the same response

app.use("/conta+ct", (req, res) => {
    res.send("Hello from the Contact Page");
})
// Here in the above path when we are writing + that means character before + can be repeated as many times
// i.e if you will go to path /contaaaaaaaaact will also show the same response

app.use("/detai*ls", (req, res) => {
    res.send("Hello from our details Page");
})
// Here in the above path when we are writing * that means after * any character can be written
// i.e if you will go to path /detafbsdfshbskhvjgnls will also show the same response

app.use("/History", (req, res) => {
    res.send("Hello from the History Page");
})

app.listen("3000",()=>{
    console.log("Server is running on Port 3000");
})