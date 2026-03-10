const OS = require ("os");
// For the Architecture of System
console.log(OS.arch()); 
// For the Info about CPU of System
console.log(OS.cpus());
// For the Info about How much memory is free of System
console.log(OS.freemem()); 
// For knowing the Home Directory of System
console.log(OS.homedir()); 
// For the network Interfaces of System
console.log(OS.networkInterfaces()); 
// For the Machine Model of System
console.log(OS.machine()); 
// For the Platform of System
console.log(OS.platform()); 
// For the Info about Total memory of System
console.log(OS.totalmem()); 
// For the Info about User of System
console.log(OS.userInfo()); 
// For the Info about Version of System
console.log(OS.version()); 