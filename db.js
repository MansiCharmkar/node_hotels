const mongoose = require('mongoose');

// define the mongodb url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'


// set up mongodb connection
mongoose.connect(mongoURL, {})
const db = mongoose.connection;

db.on('connected', () => {
    console.log('connectedd to mongoDB server')
})

db.on('error', (err) => {
    console.log('mongoDB connection error', err)
})
db.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

module.exports = db