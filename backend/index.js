const express = require('express');
const cors = require('cors');
const Router = require('./api/endpoints');

const app = express();
app.use(cors());
app.use('/', Router);

app.listen(3000, () => {
    console.log("Serveur à l'écoute");
});