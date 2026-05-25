const bcrypt = require('bcrypt');

const password = '12345678';

async function hashing() {
    console.time("Hash");
    console.log("Hashing password...");

    // Here 10 is the salt rounds, which determines the computational cost of hashing. Higher rounds mean more security but also more time to hash.
    const hash = await bcrypt.hash(password, 10);

    // Here we are using the await keyword to wait for the hashing process to complete before moving on to the next line of code. This is important because hashing can take some time, especially with higher salt rounds, and we want to ensure that we have the hash before we try to log it or use it in any way.
    console.timeEnd("Hash");
    
    // Here the console.timeEnd("Hash") will log the time taken to hash the password, which can be useful for understanding the performance of the hashing process and for debugging purposes. It will show how long it took to generate the hash, which can vary based on the complexity of the password and the number of salt rounds used.
    console.log("Hash:", hash);

    // To Confirm that the password matches the hash, we can use the bcrypt.compare() function, which takes the plaintext password and the hash as arguments and returns a boolean indicating whether they match or not.
    const isMatch = await bcrypt.compare(password, hash);
    console.log("Password matches hash:", isMatch);
}
// Same task can be done like this wehn we want to see Salt

await function hashing(){
    console.time("Hash");
    console.log("Hashing password...");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.timeEnd("Hash");
    console.log("Hash:", hash);
}

hashing();

// Output will be something like this:
// Hashing password...
// Hash: 2.062s
// Hash: $2b$10$EVTWlhvO / xQ4h6WAJOzbP.omTdloMaibqgbFxqgN7Az7B8XTdQDAm