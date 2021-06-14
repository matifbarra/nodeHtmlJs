const express = require('express')
const users = require('../models/users')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const app = express()
const router = express.Router()
const { isAuthenticated } = require('../auth')



const signToken = (_id) =>{

    return jwt.sign({ _id}, 'mi-secreto', {
        expiresIn: 60 * 60 * 24 * 365,
    })

}

router.get('/users', (req,res) => {
    users.find()
    .exec()
    .then(x => res.status(200).send(x))
    
})




router.post('/register', (req, res) => {
    const { email,password} = req.body
    crypto.randomBytes(16,(err,salt)=>{
        const newSalt = salt.toString('base64')
        crypto.pbkdf2(password,newSalt,10000,64,'sha1', (err,key)=>{
            const encryptedPassword = key.toString('base64')
            users.findOne({email})
            .exec()
            .then(user => {
                if (user) {
                    return res.send('User already exist...')
                }
                users.create({
                    email,
                    password: encryptedPassword,
                    salt: newSalt,
                })
                .then(() => {
                    res.send('User created succesfully...')
                })
            })
        })
    })
})


router.post('/login', (req, res) => {
    const { email, password } = req.body
    
    users.findOne({ email })
    .exec()
    .then(user => {
        if(!user){
            return res.send('Email address not found...')
        }

        crypto.pbkdf2(password,user.salt,10000,64,'sha1', (err,key)=>{
        const encryptedPassword = key.toString('base64')
        if (user.password === encryptedPassword){
            const token = signToken(user._id)
            return res.send({token})
        }
        return res.send('Password incorrect...')
    })
})
             
})

// router.get('/me', isAuthenticated, (req,res) => {
//     res.send(req.user)

// })
router.get('/me', isAuthenticated, (req,res) => {
    const { _id, email } = req.user
    res.send({ _id, email })
})

module.exports = router




