//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const cartyreSchema = mongoose.Schema({
    tyremake: {
        type: String,
        required: true
    },

    tyresize: {
        type:String,
        required:true
    },

   tyreamount: {
        type:String,
        required: true
    },

    carmodel: {
        type:String,
        required:true
    }, 

   tyreservices:{
        type: String,
        required:true
    },

    tyreservicefees: {
        type:String,
        required:true
    }

    

});


module.exports = mongoose.model('CartyreRegister', cartyreSchema);