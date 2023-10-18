const express = require('express');
const cors = require('cors');
const Data = require('./api/data');

const app = express();
app.use(cors());

const employe = "employee_fitness"
const performance = "evolution_progression_sportive_6mois"

const d = new Data('../database/' + employe + '.csv');
const dataEmploye = d.getData();

app.get('/employe', (req,res) => {
    res.status(200).json(dataEmploye);
});

app.get('/employe/:id', (req,res) => {
    const employe = dataEmploye.find(employe => employe.id === req.params.id);
    res.status(200).send(employe);
});

/*app.get('/index', (req,res) => {
    res.send("Here's the index");
});*/

app.listen(8080, () => {
    console.log("Serveur à l'écoute");
});