const express = require('express');
const users = require('../models/users');
const crypto = require('crypto'); //Esta libreria se usa para encriptar data
const router = express.Router();

// Para crear usuarios que se registren
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

router.post('/login', (req,res) =>{
    const { email, password } = req.body
    users.findOne({ email })//5
            .exec()
            .then(user => {
                if (!user){
                    return res.send('Usuario y/o contraseña incorrecta')
                }
                crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) =>{
                    const encryptedPassword = key.toString('base64')
                    if (user.password === encryptedPassword){
                        const token = signToken(user._id)
                        return res.send({token})
                    }
                    res.send('Usuario y/o contraseña incorrecta')
                })
            })
        })

module.exports = router;

//Extras and explanations

//1.- Utilizamos la libreria Crypto para crear nuestro salt con Bytes aleatorios
//2.- El salt viene como un buffer asi que lo transformamos en String en base 64 bytes (muy largo)
//3.- Procedemos a encriptar la contraseña usando pbkdf2
//4.- Este es el callback de 'crypto.pbkdf2' el cual nos va a devolver la key que no va a ser mas que 
      //el password encriptado (encryptedPassword)
//5.- Verificamos si el usuario existe usando el email
//6.- Si el usuario no existe lo creamos con users.create

//Extras:
// Para crear un elemento
// router.post('/', (req,res) =>{
//     meals.create(req.body)
//     .then(x => res.status(201).send(x));
    
// });