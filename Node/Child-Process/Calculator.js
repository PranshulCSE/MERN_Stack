const cp =require ("child_process");
// to open calculator
cp.execFile("C:\\Windows\\System32\\calc.exe",(err)=>{
    if(err){
        console.log(err);
    }
});