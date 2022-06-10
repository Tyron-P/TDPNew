"use strict";
const express = require ("express");

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const nameRouter = require('./router/names');

const server = app.listen(4494,() =>
{
    console.log(`server started succesfully on port number ${server.address().port}`)
});

let barry = {
    "id": 1,
    "name": "Barry",
    "age": 44,
    "job": "Receptionist"
}

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Hello, world!');
});



app.use('*', (req, res, next) => next({ status: 404, message: 'Invalid url' })); // catches 404's
//test to see if it works

app.use((err, req, res, next) => {
    res.status(err.status ? err.status : 500).send(err.message);
  });
  
