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

router.put('/update/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const nameUpdate = req.query.name;
    if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
    const oldName = names[id];
    names.splice(id, 1, nameUpdate);
    return res.send(`Replaced ${oldName} with ${names[id]}`);
  });

  router.delete('/remove/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
    names.splice(id, 1);
    return res.status(204).send();
  });
  

module.exports = router;
