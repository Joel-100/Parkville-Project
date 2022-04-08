//Here we shall define and store schemas where our data is
//Schema is data that describes another data.

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const batterySchema = mongoose.Schema({
    batterysize: {
        type: String,
        required: true
    },

    date: {
        type:String,
        required:true
    },

    amount: {
        type:String,
        required: true
    },

   

});


module.exports = mongoose.model('BatteryRegister', batterySchema);