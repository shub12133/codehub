const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
    userId: { 
        type : Schema.Types.ObjectId ,
        ref: 'user'
    },
    userImage : {
        type : String
    },
    description : {
        type : String
    },
    repos: [{
        reposID  : {
            type : Schema.Types.ObjectId,
            ref : 'repos'
        }
    }],
    createdOn : {
        type : Date ,
        default : Date.now()
    },
    updatedOn : {
        type : Date ,
        default : Date.now()
    }
})

module.exports = Profile = mongoose.model('userprofiles', ProfileSchema)