const express = require('express')
const { isAuthenticated, hasRoles } = require('../auth')
const app = express()
const orders = require('../models/orders')
const router = express.Router()



router.get('/', (req,res) => {
    orders.find()
    .exec()
    .then(x => res.status(200).send(x))
    
})

router.get('/:id', (req,res) => {
    orders.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
    
})

router.post('/', isAuthenticated, hasRoles('user'), (req,res) => {
    const { _id } = req.user
    orders.create({ ...req.body, user_id: _id })
    //orders.create(req.body)
    .then(x => res.status(201).send(x))
})


router.put('/:id',  (req,res) => {
    orders.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204))
    
})


router.delete('/:id', isAuthenticated, (req,res) => {
    orders.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.status(204))
    
})

module.exports = router


