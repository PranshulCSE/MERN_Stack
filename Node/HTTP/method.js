// Http Methods=> Get , Post , Patch , Put , Delete 


// Get ==> Fetch the Data from the Server
//  Post ==> Create the Data/user
// Put ==> Edit the User Details (Whole Data of thr User)
// Patch ==> Edit the User Details (Some part of data of thr User)
// Delete ==> Delete the user Details


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
                // Major Problem here is we have so many commands so node is unable to handle all this so we are shifting to express
                // Path is Full-stack/express/http/method.js
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



