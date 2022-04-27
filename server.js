//Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const db = mongoose.connection

//Enviroment Variables
const app = express()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

//Connect to Mongo
mongoose.connect(mongoURI, {useNewUrlParser: true},
    () => console.log('MongoDB connection established:', mongoURI)
    )

//Error/Disconnection
db.on('error', err => console.log(err.message + ' is MongoDB not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//Routes
const clientController = require('./controllers/clients.js')
app.use('/clients', clientController)

const accountController = require('./controllers/accounts.js')
app.use('/accounts', accountController)

app.listen(PORT, () => {
    console.log('Listening on ', PORT)
})