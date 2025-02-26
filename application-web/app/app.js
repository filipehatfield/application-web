const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('Aplicação web rodando!');
});

module.exports = { app, port };
