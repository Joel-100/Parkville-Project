const express = require ('express');
const router = express.Router();
const ParkingRegister = require('../models/parkingmodel');
const expressvalidator = require('express-validator');
router.use(expressvalidator());


router.get('/parking',(req,res)=>{
    res.render('vehicleReg');
});

router.post('/parking',(req,res)=>{
    const vehicletype = req.body.vehicletype;
    const numberplate = req.body.numberplate;
    const model       = req.body.model;
    const drivername  = req.body.drivername;
    const phonenumber = req.body.phonenumber;
    const date        = req.body.date;
    const entrytime   = req.body.entrytime;

    let errors = req.validationErrors();
    if(errors){
        res.render('vehicleReg');
    
    }
    else{
        const newReg = new ParkingRegister({
            vehicletype:vehicletype,
            numberplate:numberplate,
            model:model,
            drivername:drivername,
            phonenumber:phonenumber,
            date:date,
            entrytime:entrytime,



        });
        newReg.save((err)=>{
            if(err){
                console.error(err);
                return;
            }
            else{
                res.redirect('/parkingReport');
            }

        });
    

            
    }   
});


module.exports = router;