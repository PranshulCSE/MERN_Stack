clear
const http=require("http");

const server=http.createServer((req,res)=>{
    if((req.url)=== '/favicon.ico')
       return res.end();
    console.log(`Request received from - ${req.url}`);
    res.end("Hello from Server!!");
    // console.log(req);
});

// Server POrts == 0 to 65535

server.listen(4400, ()=> console.log("Server is Running"));