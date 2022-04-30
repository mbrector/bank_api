const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    clientID: String,
    accountType: String,
    amount: Number,
    accountNumber: Number
})

const Accounts = mongoose.model('Account', accountSchema)

module.exports = Accounts