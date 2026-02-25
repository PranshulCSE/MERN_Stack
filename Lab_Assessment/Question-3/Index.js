// Q2)
// NodeJS setup and apply the method of FS Module.

const fs= require('fs');
// Create a new file and write some content to it
const Data="Hello FS Module Learners!!";
fs.writeFile("test1.txt",Data,()=>{});
// Read the content of the file
fs.readFile("test1.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
// Append some content to the existing file
const additionalData="\nWelcome to NodeJS!";
fs.appendFile("test1.txt",additionalData,(err)=>{
    if(err) throw err;
    console.log("Data appended successfully!");
});
// Read the updated content of the file
fs.readFile("test1.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
// Delete the file
fs.unlink("test1.txt",(err)=>{
    if(err) throw err;
    console.log("File deleted successfully!");
});