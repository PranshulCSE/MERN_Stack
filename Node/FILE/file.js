// fs stands for file System module.
// Any operation on file is performed with the help of this module.

// Here we Importing the fs Module


const fs=require('fs');
fs.writeFileSync('Test.txt','First File Created using FS Module','utf-8');
// When we run this file it will make a new file in root folder contains the message which you have written

// Now we will see the Asynchronus 
fs.writeFile("test2.txt","Hello JS",(err,data=>{}));