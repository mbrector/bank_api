const express = require('express')
const router = express.Router()
const Account = require('../models/accounts.js');

//Index
router.get('/', (req, res)=>{
    Account.find({}, (err, foundAccounts)=>{
        res.json(foundAccounts)
    })
})
//Delete
router.delete('/:id', (req, res)=>{
    Account.findByIdAndRemove(req.params.id, (err, deletedAccount)=>{
        res.json(deletedAccount)
    })
})
//Update
router.put('/:id', (req, res)=>{
    Account.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAccount)=>{
        res.json(updatedAccount)
    })
})
//Create
router.post('/', (req, res)=>{
    Account.create(req.body, (err, createdAccount)=>{
        res.json(createdAccount)
    })
})
//Show
router.get('/:id', (req, res)=>{
    Account.findById(req.params.id, (err, foundAccount)=>{
        res.json(foundAccount);
    });
});


module.exports = router