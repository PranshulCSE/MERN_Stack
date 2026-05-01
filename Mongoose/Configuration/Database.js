const mongoose = require('mongoose');

function connectToDatabase() {
    const url = "#";
    mongoose.connect(url).then(() => {
        console.log("Connected to the database successfully");
    }).catch((error) => {
        console.log("Error connecting to the database:", error);
    }
    );
}
