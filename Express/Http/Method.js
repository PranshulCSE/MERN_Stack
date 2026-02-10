// Firstly install Express in your Current working Directory using Command
// npm i Express
// By this we will get Package.Json & Package-Lock.Json

const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((req,res)=>{
    if(req.url ==='/favicon.ico') return res.end();
    const now =new Date;
    const log=`${now.toString()} : New Request is received on ${req.url} and type of request is ${req.method} \n`
    fs.appendFile("text1.txt",log,(err,data)=>{
            if(err)
                console.log("Error while writing data into file");
            else
                console.log("Data written Successfully");
        });
        const myurl=url.parse(req.url,true);
        switch (myurl.pathname) {
        case("/signup"):
            if(req.method=="GET") {
            const username=myurl.query.username;
                res.end(`Welcome Mr./Ms. ${username} to SignUp Page.` )}
                else if(req.method=="POST")
                    res.end(`DataBase Query`);
                else
                    res.end(`Invalid Query`);
                break;
        case ("/about"):
            const username=myurl.query.username;
            res.end(`Welcome Mr./Ms. ${username}`);
            break;
        case ("/home"):
            res.end("Welcome Home");
            break;
        case ("/service"):
            res.end("Service");
            break;
        default:
            res.end("Error: 404 Not Found!!");
    }
});
server.listen(4000,()=>console.log("Server is Running on Port No. : 4000"));





