const express = require('express');
const { isAuthenticated, hasRoles} = require('../auth');
const backup_orders = require('../models/backup');
const router = express.Router();



// Para obtener un listado de elementos
router.get('/', (req,res) =>{
    backup_orders.find()
    .exec()
    .then(x => res.status(200).send(x)) 
});



// Para crear un elemento
router.post('/', isAuthenticated, hasRoles(['admin','user']),(req,res) =>{
// router.post('/',(req,res) =>{
    const { _id } = req.user
    backup_orders.create({...req.body,user_id: _id})
    .then(x => res.status(201).send(x));
    
});


// router.delete('/:id',isAuthenticated, (req,res)=>{
//     orders.findOneAndDelete(req.params.id,req.body)
//     .then(x => res.sendStatus(204));
// })


module.exports = router;