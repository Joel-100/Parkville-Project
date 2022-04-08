const express = require ('express');
const router  = express.Router();
const BatteryRegister = require('../models/batterymodel');
const expressvalidator = require('express-validator');
router.use(expressvalidator());


router.get('/battery',(req,res)=>{
    res.render('batteryReg');

});

router.post('/battery',(req,res)=>{
    const batterysize = req.body.batterysize;
    const date        = req.body.date;
    const amount      = req.body.amount;

    let errors = req.validationErrors();
    if(errors){
        res.render('batteryReg');
    }
    else{
        const newBattery = new BatteryRegister({
            batterysize:batterysize,
            date       :date,
            amount     :amount

        });
        newBattery.save((err)=>{
           if (err){
               console.error(err);
               return;
           }
            else{
                res.redirect('/battery');

            }
        })
        
    }

});

module.exports = router;