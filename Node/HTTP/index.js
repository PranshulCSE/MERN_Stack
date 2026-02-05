const http=require("http");

const server=http.createServer((req,res)=>{
    //  console.log(req.url);
    if((req.url)=== '/favicon.ico')
        res.end();
    console.log(`Request received from - ${req.url}`);
    // console.log("Hello from Client!!");
    res.end("Hello from Server!!");
});

// Server= 0 to 65376
server.listen(4400, ()=> console.log("Server is Running"));