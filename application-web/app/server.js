const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Aplicação web rodando!');
});

// Exporta o app para testes
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}

module.exports = app;
