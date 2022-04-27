const express = require('express')
const router = express.Router()
const Client = require('../models/clients.js');

//Index
router.get('/', (req, res)=>{
    Client.find({}, (err, foundClients)=>{
        res.json(foundClients)
    })
})
//Delete
router.delete('/:id', (req, res)=>{
    Client.findByIdAndRemove(req.params.id, (err, deletedClient)=>{
        res.json(deletedClient)
    })
})
//Update
router.put('/:id', (req, res)=>{
    Client.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedClient)=>{
        res.json(updatedClient)
    })
})
//Create
router.post('/', (req, res)=>{
    Client.create(req.body, (err, createdClient)=>{
        res.json(createdClient)
    })
})
//Show
router.get('/:id', (req, res)=>{
    Client.findById(req.params.id, (err, foundClient)=>{
        res.json(foundClient);
    });
});


module.exports = router