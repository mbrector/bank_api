const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    clientID: String,
    checkingAccount: Number,
    savingsAccount: Number
})

const Accounts = mongoose.model('Account', accountSchema)

module.exports = Accounts