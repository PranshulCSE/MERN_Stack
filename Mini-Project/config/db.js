const mongoose = require('mongoose');
const URL ="mongodb+srv://threjapranshul_db_user:Pranshul@practicecluster.4zkr6cf.mongodb.net/Bookstore"
const connectDB = async () => {
    
        await mongoose.connect(URL).then(()=>{
            console.log("Connected to MongoDB successfully");
        }
        ).catch((err)=>{
            console.log("MongoDB Connection Error:", err.message);
            process.exit(1);
        });
};

module.exports = connectDB;
