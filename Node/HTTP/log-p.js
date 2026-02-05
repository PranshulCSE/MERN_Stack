const http=require("http");
const fs= require("fs");

const server=http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log=`${Date.now()} : New Request is received ${req.url} \n`;
    fs.appendFile("text1.txt",log,(err,data)=>{
        if(err)
            console.log("Error while writing data into file");
        else
            console.log("Data written Successfully");
    });
    // res.end(`Welcome to Server!!`);
    // res.end(`Hello User, Welcome to ${req.url}`);
    switch (req.url) {
        case ("/about"):
            res.end("Hello About!!");
            break;
        case ("/Home"):
            res.end("Welcome Home");
            break;
        case ("/Service"):
            res.end("Service");
            break;
        default:
            res.end("Error: 404 Not Found!!");
    }
});
server.listen(4000,()=>console.log("Server is Running on Port No. : 4000"));