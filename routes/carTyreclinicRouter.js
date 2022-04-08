const express = require ('express');
const router = express.Router();
const CartyreRegister = require('../models/cartyremodel');
const expressvalidator = require('express-validator');
router.use(expressvalidator());

router.get('/cartyremodel',(req,res)=>{
    res.render('tyreClinic');
});

router.post('/cartyremodel',(req,res)=>{
    const tyremake = req.body.tyremake;
    const tyresize = req.body.tyresize;
    const tyreamount   = req.body.tyreamount;
    const carmodel = req.body.carmodel;
    const tyreservices = req.body.tyreservices;
    const tyreservicefees = req.body.tyreservicefees;

    let errors = req.validationErrors();
    if(errors){
        res.render('tyreClinic');
        
    }
    else{
        const newTyre = new CartyreRegister({
            tyremake:tyremake,
            tyresize:tyresize,
              tyreamount:tyreamount,
            carmodel:carmodel,
        tyreservices:tyreservices,
     tyreservicefees:tyreservicefees,

        });
        newTyre.save((err)=>{
           if(err){
               console.error(err)
               return;
           }
           else{
               res.redirect('/cartyremodel');
           }

        });

        
        
    }



}); 

module.exports = router;