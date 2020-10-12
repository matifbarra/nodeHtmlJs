const express = require('express');
const users = require('../models/users');
const crypto = require('crypto'); //Esta libreria se usa para encriptar data

const router = express.Router();

//GET de users
router.get('/', (req,res) =>{
    users.find()
    .exec()
    .then(x => res.status(200).send(x)) 
});

router.post('/register', (req,res) => {
    const { email, password } = req.body
    crypto.randomBytes(16, (err, salt) => { //1
        const newSalt = salt.toString('base64')//2
        crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) =>{ //3
            const encryptedPassword = key.toString('base64')//4
            users.findOne({ email })//5
            .exec()
            .then(user => {
                if (user){
                    return res.send('Usuario ya existe')
                }
                users.create({ //6
                    email,
                    password: encryptedPassword,
                    salt: newSalt,
                }).then(() => {
                    res.send('Usuario creado con exito')
                })
            })

        })
    })
  });
  
module.exports = router