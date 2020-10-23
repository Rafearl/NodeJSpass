const mongoose  = require('mongoose')
const schema    = mongoose.Schema

const userSchema = new schema({
    email: {
        type: String
    }
}, {timestamps: true}) 

const User      = mongoose.model('user', userSchema)
module.export   = User