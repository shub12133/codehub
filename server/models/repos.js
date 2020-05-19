const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const ReposSchema = new Schema ({
    ownerId : {
        type : Schema.Types.ObjectId ,
        ref :'user'
    },
    collabsId :[
        {
            users : {
                type : Schema.Types.ObjectId ,
                ref :'user'
            }
        }
    ],
    invitees :[
        {
            user : {
                type : Schema.Types.ObjectId ,
                ref :'user'
            }
        }
    ],
    repoName : {
        type : String
    },
    repoID: {
        type : String,
        default  : function(){
            return crypto.randomBytes(10).toString("hex")
        }
    },
    repoDescription: {
        type : String
    },
    createdOn : {
        type : Date ,
        default : Date.now()
    },
    updatedOn : {
        type : Date ,
        default : Date.now()
    }

})


module.exports = Repos = mongoose.model('repos' , ReposSchema)