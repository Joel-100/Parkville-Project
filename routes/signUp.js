//creating a route that we shall use to connect
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs/dist/bcrypt')

//we are trying to create instances of signing up
const UserRegister = require('../models/registermodel');

//we are trying to validate our database
const expressValidator = require('express-validator');

//router to validate our data
router.use(expressValidator());

//we are getting info from path specified as signup
router.get('/signUp',(req,res) => {
   //we are asking the server to give us information from signUp 
   res.render('register');
});

router.post('/register', async (req, res) => {
   try{
       const newUser = new UserRegister(req.body);
       let user = await UserRegister.findOne({email:req.body.email});
       if(user){
           return res.status(400).send('You cant register, email already exists');
       }
       else {
           bcrypt.genSalt(7,(err,salt) => {
               bcrypt.hash(newUser.password, salt,(err,hash) =>{
                   if(err){
                       console.error(err);
                       return;
                   }
                   newUser.password = hash;
               });
           });
           await UserRegister.register(newUser, req.body.password, (err) => {
               if(err){ //Register method has an inbuilt encryption
                   throw err;
               }
               res.redirect('/login');
           } );
       }
      
   }

   catch(err){
       console.log(err);
       res.send('You data wasnt saved')
   }

});



// router.post('/register',(req,res) => {
   


//    const username = req.body.username;
//    const email = req.body.email;
//    const password = req.body.password; 
//    const confirmpassword = req.body.confirmpassword;
//    const phonenumber = req.body.phonenumber;
//    const role = req.body.role;

//    //validation of data from the form
//    req.checkBody('username','enter username').notEmpty();
//    req.checkBody('email','enter email').notEmpty();
//    req.checkBody('password','enter password').notEmpty();
//    req.checkBody('confirmpassword','enter confirmpassword').notEmpty();
//    req.checkBody('phonenumber','enter phonenumber').notEmpty();
//    req.checkBody('role','enter role').notEmpty();

//    //checking errors
//    let errors = req.validationErrors();
//    if(errors) {
//       res.render('register');

//    }
//    else{
//       let newuser = new UserRegister({
//          username: username,
//          email: email,
//          password: password,
//          confirmpassword: confirmpassword,
//          phonenumber: phonenumber,
//          role: role
//       });
      
//       //now saving a user
//       newuser.save((err)=>{
//         if(err){
//            console.error(err);
//            return;

//         }
//         else{

//          //req.flash('success','you have successfully signed up')
//            console.log('you have saved your data to the database');
//            res.redirect('/login')
//         }
        
//       })
//    }



//});


module.exports = router;
