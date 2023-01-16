const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = mongoose.Schema({

    name: {
        type:String,
        required:true,
        minLength:3
    },
    email: {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email id')
            }
        }
    },
    phone: {
        type:Number,
        required:true,
        min:12
    },
    message: {
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default: Date.now
    }

})


// we need collection
const User =  mongoose.model("userdata", userSchema); 

module.exports = User;
