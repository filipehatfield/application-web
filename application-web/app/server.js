const { app, port } = require('./app');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
