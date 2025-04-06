const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb url
// const mongoURL = process.env.MONGODB_URL_LOCAL

const mongoURL = process.env.MONGODB_URL


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