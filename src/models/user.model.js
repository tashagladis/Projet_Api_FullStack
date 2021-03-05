const mongoose = require('mongoose')
const joi = require('joi')



const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    passWord:{
        type: String,
        required: true,     
    },
    lastName: !String,
    email: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean
    },
     age:{
         type: Number
     }
}, 
{timestamps : true}
);

module.exports = mongoose.model('User', userSchema)