const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

const Clients = mongoose.model('Client', clientSchema)

module.exports = Clients