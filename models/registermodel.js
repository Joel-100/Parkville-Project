//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required: true
    },

    phonenumber: {
        type:String,
        required:true
    }, 

    role:{
        type: String,
        required:true
    }
});

registerSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
})

module.exports = mongoose.model('UserRegister', registerSchema);