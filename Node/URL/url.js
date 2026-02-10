// https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=blockchain+applications&oq=blockcha
const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((req,res)=>{
    if(req.url ==='/favicon.ico') return res.end();
    const now =new Date;
    const log=`${now.toString()} : New Request is received ${req.url} \n`
    fs.appendFile("text1.txt",log,(err,data)=>{
            if(err)
                console.log("Error while writing data into file");
            else
                console.log("Data written Successfully");
        });
        const myurl=url.parse(req.url,true);
        // console.log(myurl);
        switch (myurl.pathname) {
        case ("/about"):
            const username=myurl.query.username;
            res.end(`Welcome Mr./Ms. ${username}`);
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
