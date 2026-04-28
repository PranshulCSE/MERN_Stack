
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const url = "mongodb+srv://threjapranshul_db_user:Pranshul@practicecluster.4zkr6cf.mongodb.net/BookStore";
// Here in the Above Url at last after slash / we have to write our Database name which we want to create in our MongoDB Atlas Cluster. If the database with that name already exists then it will connect to that database otherwise it will create a new database with that name and connect to it.
// Hierarchy will be Cluster->Database->Collection->Document->Field
async function main() {
    // Connecting to the database
    await mongoose.connect(url).then(() => {
        console.log("Connected to the database successfully");
    }).catch((error) => {
        console.log("Error connecting to the database:", error);
    })
    // Defining a schema
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
        city: String,
        gender: String
    });
    // Creating a model
    const User = mongoose.model('User', userSchema);
    // Creating a new user document
    const newUser = new User({
        name: "Pranshul",
        age: 23,
        city: "Delhi",
        gender: "Male"
    });
    await newUser.save().then(() => {
        console.log("User saved successfully");
    }).catch((error) => {
        console.log("Error saving user:", error);
    });
    // Same task can be done in short using Create
    const newUser2 = await User.create({
        name: "Shubham",
        age: 30,
        city: "Karnal",
        gender: "Male"
    }).then(() => {
        console.log("User saved successfully");
    }).catch((error) => {
        console.log("Error saving user:", error);
    });
    // Similarly we are having with InsertMany Method by which we can insert array of object at once
    const newUsers = await User.insertMany([
        {
            name: "Rahul",
            age: 28,
            city: "Mumbai",
            gender: "Male"
        },
        {
            name: "Priya",
            age: 24,
            city: "Mumbai",
            gender: "Female"
        }
    ]).then(() => {
        console.log("Users saved successfully");
    }).catch((error) => {
        console.log("Error saving users:", error);
    });
    // Find all users

    const users = await User.find().then((users) => {
        console.log("Users found successfully:", users);
    }).catch((error) => {
        console.log("Error finding users:", error);
    });
     // Find user by name
    const userByName = await User.findOne({ name: "Pranshul" }).then((user) => {
        console.log("User found successfully:", user);
    }).catch((error) => {
        console.log("Error finding user:", error);
    });
        // Update user by name
    const updatedUser = await User.findOneAndUpdate({ name: "Pranshul" }, { age: 24 }, { new: true }).then((user) => {
        console.log("User updated successfully:", user);
    }).catch((error) => {
        console.log("Error updating user:", error);
    });
     // Delete user by name
    const deletedUser = await User.findOneAndDelete({ name: "Shubham" }).then((user) => {
        console.log("User deleted successfully:", user);
    }).catch((error) => {
        console.log("Error deleting user:", error);
    });
}


main();

