const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    createdOn : {
        type : Date ,
        default : Date.now()
    },
    role : {
        type : String,
        default : 'user'
    },
    name : {
        type : String,
        required : [true , "Name is required"]
    }, 
    email : { 
        type : String,
        required : [true , "email is required"],
        unique : [true, " Email already exists"],
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please enter a valid email address"
        ]
    },
    password : {
        type : String,
        min : 6
    },
    image : {
        type : String
    },
    phone : {
        type : String
    },
    active  : {
        type : Boolean
    },
    isVerified : {
        type : Boolean,
        default : false
    }
})

module.exports = User = mongoose.model('user' , userSchema)