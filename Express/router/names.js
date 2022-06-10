const router = require('express').Router();
const express = require ("express");

let name = ["Tyron","Michal","Callum","Nikita","Molly"]


router.get('/hello', (req, res)=> res.send("Hello world"));

router.post('/create', (req, res) => console.log('create'));

router.put('/replace', (req, res) => console.log('replace'));

router.patch('/update', (req, res) => console.log('update'));

router.delete('/delete', (req, res) => console.log('delete'));

router.get('/getAll', (req, res) => res.send (name));

router.get('/get/:id', (req, res) => res.send(name[req.params.id,0]));

router.get('/delete/:id', (req, res) => {
    res.send(name.splice(req.params.id, 1));
});

router.use(express.json());

router.post('/create', (req, res) => {
    const nameAdd = req.body.name;
    names.push(nameAdd);
    res.status(201).send(`${nameAdd} added successfully`);
});

module.exports = router;
