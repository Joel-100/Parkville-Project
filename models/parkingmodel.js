//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const parkingSchema = mongoose.Schema({
    vehicletype: {
        type: String,
        required: true
    },

    numberplate: {
        type:String,
        required:true
    },

    model: {
        type:String,
        required: true
    },

    drivername: {
        type:String,
        required:true
    }, 

    phonenumber:{
        type: String,
        required:true
    },

    date: {
        type:String,
        required:true
    },

    entrytime: {
        type:String,
        required:true
    }


});


module.exports = mongoose.model('ParkingRegister', parkingSchema);