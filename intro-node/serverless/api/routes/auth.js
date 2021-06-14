const express = require('express');
const users = require('../models/users');
const crypto = require('crypto'); //Esta libreria se usa para encriptar data
const jwt = require('jsonwebtoken');
const { isAuthenticated, hasRoles } = require('../auth')
const router = express.Router();


const signToken = (_id) =>{//11
    return jwt.sign({ _id }, 'mi-secreto',{
        expiresIn: 60 * 60 * 24 * 365,
    })
}

// Login de usuarios ya registrados  
router.post('/login',(req,res) =>{
    const { email, password } = req.body
    users.findOne({ email })//5
            .exec()
            .then(user => {
                console.log(user)
                if (!user){ //7
                    // return res.send('Usuario y/o contraseña incorrecta')
                    return res.sendStatus(404)
                } 
                crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) =>{ //8
                const encryptedPassword = key.toString('base64')//9
                if (user.password === encryptedPassword){ //10
                    const token = signToken(user._id)
                    return res.send({token})
                }
                        
            })
        })
    })



router.get('/me', isAuthenticated, (req,res) => {
    const { _id, email, nombre} = req.user
    res.send({ _id, email, nombre})
})

module.exports = router;

//Endpoints de la parte de autorizacion/autenticacion
//Extras and explanations

//1.- Utilizamos la libreria Crypto para crear nuestro salt con Bytes aleatorios
//2.- El salt viene como un buffer asi que lo transformamos en String en base 64 bytes (muy largo)
//3.- Procedemos a encriptar la contraseña usando pbkdf2
//4.- Este es el callback de 'crypto.pbkdf2' el cual nos va a devolver la key que no va a ser mas que 
    //el password encriptado envuelto en otra capa de String en base 64 bits (encryptedPassword)
//5.- Verificamos si el usuario existe usando el email
//6.- Si el usuario no existe lo creamos con users.create
//7.- Si el usuario no se encuentra se envia un mensaje de No encontrado
//8.- Utilizamos crypto para encriptar el password que fue ingresado por el usuario
//9.- Este es el callback de 'crypto.pbkdf2' el cual nos va a devolver la key que no va a ser mas que 
    //el password encriptado envuelto en otra capa de String en base 64 bits (encryptedPassword)
//10.- Comparamos el password entrado por el usuario con el que viene en user.password y si es igual
    //declaramos la variable 'token' que almacenara el user._id firmado con la funcion signToken y este 
    //sera devuelto con res.send para ser usado por el usario en el resto de la aplicacion.
    
 //11.- signToken: lo que hace es encriptar nuestro user._id el cual sera devuelto encriptado al usuario.


//Extras:
// Para crear un elemento
// router.post('/', (req,res) =>{
//     meals.create(req.body)
//     .then(x => res.status(201).send(x));
    
// });