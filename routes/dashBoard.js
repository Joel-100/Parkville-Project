const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/dashBoard',(req, res) => {
    res.render('dashboard');

});

module.exports = router;