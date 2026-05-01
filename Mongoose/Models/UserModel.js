const mongoose = require('mongoose');
const {schema} = require('mongoose');

const userSchema = new mongoose.Schema({
        firstName:{
            type: String,
            required:[true,"First Name is Required"]
        },
        lastName: {
            type: String,
            required:[true,"Last Name is Required"]
        },
        age: {
            type: Number,
            min:[18,"You are Minor to get Register"],
            max:70
        },
        gender: {
            type: String,
            enum:["Male","Female","Others"]
        },
    emailId: {
        type: String,
        required: function(value){
            if(!value.contains("@")){
                throw new Error("Please enter a valid email address");
            }
        }
    },
    password: {
        type: String
    },
    photo:{
        type: String
    },
    timestamps: true
    });
  
    const User = mongoose.model('User', userSchema);