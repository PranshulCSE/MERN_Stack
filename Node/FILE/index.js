const fs=require("fs");
fs.writeFile("Test.txt","Hello Node Js Users!!",(err,data)=>{});

fs.writeFileSync("test1.txt","Hello JavaScript Users!!","utf-8");

fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err)
        console.log("Error Occured");
    else
        console.log(data);
})

const data=fs.readFileSync("test1.txt","utf-8");
console.log(data);