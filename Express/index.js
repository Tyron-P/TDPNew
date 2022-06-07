"use strict";
const express = require ("express");

const app = express();

const server = app.listen(4494,() =>
{
    console.log(`server started succesfully on port number ${server.address().port}`)
});

app.use(express.json());

app.get('/hello', (req, res)=> res.send("Hello world"));

app.post('/create', (req, res) => console.log('create'));

app.put('/replace', (req, res) => console.log('replace'));

app.patch('/update', (req, res) => console.log('update'));

app.delete('/delete', (req, res) => console.log('delete'));

let barry = {
    "id": 1,
    "name": "Barry",
    "age": 44,
    "job": "Receptionist"
}

let name = ["Tyron","Michal","Callum","Nikita","Molly"]

app.get('/getAll', (req, res) => res.send (name));

app.get('/get/:id', (req, res) => res.send(name[req.params.id,0]));

app.get('/delete/:id', (req, res) => {
    res.send(name.splice(req.params.id, 1));
});

app.post('/create', (req, res) => {
    const nameAdd = req.body.nameAdd;
    names.push(nameAdd);
    res.status(201).send(`${nameAdd} added successfully`);
});