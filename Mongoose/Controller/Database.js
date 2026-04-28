const mongoose = require('mongoose');

function connectToDatabase() {
    const url = "mongodb+srv://threjapranshul_db_user:Pranshul@practicecluster.4zkr6cf.mongodb.net/BookStore";
    mongoose.connect(url).then(() => {
        console.log("Connected to the database successfully");
    }).catch((error) => {
        console.log("Error connecting to the database:", error);
    }
    );
}
