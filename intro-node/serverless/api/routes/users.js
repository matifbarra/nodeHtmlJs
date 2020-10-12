const express = require('express');
const users = require('../models/users');
const router = express.Router();

//GET de users
router.get('/', (req,res) =>{
    users.find()
    .exec()
    .then(x => res.status(200).send(x)) 
});

module.exports = router