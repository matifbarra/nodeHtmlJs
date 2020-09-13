const express = require('express');
const orders = require('../models/orders');
const router = express.Router();



// Para obtener un listado de elementos
router.get('/', (req,res) =>{
    orders.find()
    .exec()
    .then(x => res.status(200).send(x)) 
});

// Para obtener solo uno
router.get('/:id', (req,res) =>{
    orders.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x)) 
});

// Para crear un elemento
router.post('/', (req,res) =>{
    orders.create(req.body)
    .then(x => res.status(201).send(x));
    
});

// Para actualizar un elemento
router.put('/:id', (req,res) =>{
    orders.findOneAndUpdate(req.params.id,req.body)
    .then(x => res.sendStatus(204));
});

router.delete('/:id',(req,res)=>{
    orders.findOneAndDelete(req.params.id,req.body)
    .then(x => res.sendStatus(204));
})


module.exports = router;