const fs=require("fs");

fs.copyFile("test1.txt","test.txt",(err,data)=>{
    if(err)
        console.log("Error While Copying",err);
    else
        console.log("data Copied Successfully");
});