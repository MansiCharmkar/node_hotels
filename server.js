// console.log("server file is running");
// callback function

// function add(a, b) {
//   return a + b;
// }

// 2nd type in function write
// var add = function(a, b) {
//     return a + b;
// };

// 3nd type in function write
// var add = (a, b) => {
//     return a + b;
// };

// 4nd type in function write
// var add = (a, b) => a + b;
// var result = add(28, 49);
// console.log("Sum of number : ", result);

// iffi function
// (function() {
//     console.log("hello world with using the iffi function");
// })();

// callback function
// function callback() {
//     console.log("Addition is completed");

// }

// function add(a, b, callback) {
//     let result = a + b;
//     console.log(result);
//     callback();
// }

// inline function
// add(34, 65, function() {
//     console.log("add is completed")
// })
// add(23, 4, () => console.log('add is completed'))

// use the node modules

// var fs = require("fs");
// var os = require("os");
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greeting.txt", "hi" + user.username + "!\n", () => {
//     console.log("function is created successfully");
// });

// use the exports function
// const notes = require("./notes.js");
// var _ = require("lodash");

// console.log("server file is available");
// var age = notes.age;
// var result = notes.addNumber(age + 15, 30);
// console.log(age);
// console.log("result is now = ", result);
// var data = ["person", "person", 1, 3, 1, 3, "sony", "sony", "developer"];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString("_"));
// console.log(_.isString(5));

//practice data// app.get('/sweet', function(req, res) {
//     res.send('Sure sir, i would like to serve differnt sweets.')
// })
// app.get('/idli', function(req, res) {
//     let costomizeIdli = {
//         name: 'rawa idli',
//         size: '5 pieces',
//         is_shambher: true,
//         is_chatney: false
//     }
//     res.send(costomizeIdli);
// })
// app.get('/fruits', function(req, res) {
//     res.send('Sure sir, I would like to serve mongo fruits')
// })
// app.get('/data', function(req, res) {
//     let studentData = {
//         name: 'Sarojni',
//         age: 20,
//         subject: 'science',
//         passing_year: 2020
//     }
//     res.send(studentData);
// })

// create server with the helpof express js
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Welcome our hotels.');

})

// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes)

app.listen(PORT, () => {
    console.log('listening on port 3000');

});