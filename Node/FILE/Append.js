const fs=require("fs");
fs.appendFileSync("Test.txt","\n We are Appending data using Synchronous Method.","utf-8");


const data=fs.readFileSync("test.txt","utf-8");
console.log(data);