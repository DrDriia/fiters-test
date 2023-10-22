const express = require('express');
const Data = require('./dataModel');

const router = express.Router();

const strEmploye = "employee_fitness";
const strPerformance = "evolution_progression_sportive_6mois";

// ROUTES POUR VOIR LES DONNEES SOUS FORMAT JSON

router.get('/emp', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    res.status(200).json(dataEmploye);
});

router.get('/perf', (req,res) => {
    let dataPerformance = Data.getCsv('../database/' + strPerformance + '.csv');
    res.status(200).json(dataPerformance);
});

// ROUTES CORRESPONDANT AUX REQUETES POUR LES GRAPHIQUES

router.get('/employe', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    res.status(200).json([dataEmploye.length]);
});

router.get('/employe/:cat', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    if (dataEmploye.length != 0 && !dataEmploye[0].hasOwnProperty(req.params.cat)){
        res.status(400).send('Catégorie inexistante');
        return;
    }
    let labels = [];
    let cpt = [];

    dataEmploye.forEach((item) => {
        if (!labels.includes(item[req.params.cat])) {
            labels.push(item[req.params.cat]);
            cpt.push(0);
        }
        cpt[labels.indexOf(item[req.params.cat])] += 1;
    });

    res.status(200).send([labels, [{label:'Nombre',data:cpt}]]);
});

router.get('/participate/', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    let datas = 0;
    let cpt = 0;
    
    dataEmploye.forEach((item) => {
        datas += parseInt(item['taux_participation'].substring(0, 2));
        cpt += 1;
    });

    datas /= cpt;

    res.status(200).send([datas + " %"]);
});

router.get('/participate/:cat', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    if (dataEmploye.length != 0 && !dataEmploye[0].hasOwnProperty(req.params.cat)){
        res.status(400).send('Catégorie inexistante');
        return;
    }
    let labels = [];
    let datas = [];
    let cpt = [];
    
    dataEmploye.forEach((item) => {
        if (!labels.includes(item[req.params.cat])) {
            labels.push(item[req.params.cat]);
            cpt.push(0);
            datas.push(0);
        }
        datas[labels.indexOf(item[req.params.cat])] += parseInt(item['taux_participation'].substring(0, 2));
        cpt[labels.indexOf(item[req.params.cat])] += 1;
    });

    for (var i = 0;i<labels.length;++i){
        datas[i] /= cpt[i];
    }

    res.status(200).send([labels, [{label:'Taux de participation',data:datas}]]);
});

router.get('/performance/', (req,res) => {
    let dataPerformance = Data.getCsv('../database/' + strPerformance + '.csv');
    let labels = [];
    let datas = [];
    let cpt = [];
    
    dataPerformance.forEach((item) => {
        if (!labels.includes(item.mois)){
            labels.push(item.mois);
            datas.push(0);
            cpt.push(0);
        }
        datas[labels.indexOf(item.mois)] += parseInt(item.progression_sportive);
        cpt[labels.indexOf(item.mois)] += 1;
    });

    for (let i = 0;i<labels.length;++i)
        datas[i] /= cpt[i];

    res.status(200).send([labels, [{label:'Global',data:datas}]]);
});

router.get('/performance/:cat', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    let dataPerformance = Data.getCsv('../database/' + strPerformance + '.csv');
    if (dataEmploye.length != 0 && !dataEmploye[0].hasOwnProperty(req.params.cat)){
        res.status(400).send('Catégorie inexistante');
        return;
    }
    let labels = [];
    let labelsCat = [];
    let datas = [];
    let cpt = [];
    
    dataPerformance.forEach((item) => {
        if (!labels.includes(item.mois)){
            labels.push(item.mois);
            for (let i = 0;i<datas.length;++i){
                datas[i].data.push(0);
                cpt[i].push(0);
            }
        }
        let emp = dataEmploye.find(employe => employe.id === item.employe_id);
        if (emp === null || emp === undefined){
            res.status(409).send("Employé introuvable");
            return;
        }
        let cat = emp[req.params.cat];
        if (!labelsCat.includes(cat)){
            labelsCat.push(cat);
            let list = [];
            for (let i = 0;i<labels.length;++i)
                list.push(0);
            datas.push({label:cat,data:[...list]});
            cpt.push([...list]);
        }
        datas[labelsCat.indexOf(cat)].data[labels.indexOf(item.mois)] += parseInt(item.progression_sportive);
        cpt[labelsCat.indexOf(cat)][labels.indexOf(item.mois)] += 1;
    });

    for (let i = 0;i<labelsCat.length;++i){
        for (let j = 0;j<labels.length;++j)
            datas[i].data[j] /= cpt[i][j];
    }

    res.status(200).send([labels, datas]);
});

router.get('/perfpart', (req,res) => {
    let dataEmploye = Data.getCsv('../database/' + strEmploye + '.csv');
    let dataPerformance = Data.getCsv('../database/' + strPerformance + '.csv');
    let datas = [];
    
    dataEmploye.forEach((item) => {
        let total = 0;
        let cpt = 0;
        let id = item.id;
        dataPerformance.forEach((perf) => {
            if (perf.employe_id === id){
                total += parseInt(perf.progression_sportive);
                cpt += 1;
            }
        });
        datas.push({
            x:parseInt(item.taux_participation.substring(0, 2)),
            y:total/cpt
        })
    });

    res.status(200).send([[], [{label:'Evolution sportive en fonction du taux de participation',data:datas}]]);
});

module.exports = router;