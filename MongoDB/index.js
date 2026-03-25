// How to use MongoDB with Express.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Student")
    .then(() => {
        console.log("Database Connected Successfully!!");
    })
    .catch((err) => {
        console.log("Error while Connecting Database!!");
    });

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please Enter the First Name"],
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    }
});

const UserModel = mongoose.model("User", schema);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// How to Add data, Delete data, Update data and Get data from MongoDB using Express.js
app.post("/users", async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        return res.json({ message: "User created successfully", id: user._id });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
            return res.json(user);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(() => {
    console.log(`Server is running on 3000`);
})
