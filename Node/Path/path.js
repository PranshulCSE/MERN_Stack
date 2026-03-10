const path=require("path");

// To extraxt Extension of a particular file
const ext = path.extname('C: \\MCA - 2\\Full - Stack\\Node\\Path\\SAJSSM.txt');
console.log(ext);

// To extraxt exact name of a particular file
const name = path.basename('C: \\MCA - 2\\Full - Stack\\Node\\Path\\SAJSSM.txt');
console.log(name);

console.log(__dirname);

console.log(__filename);