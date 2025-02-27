const request = require('supertest');
const app = require('../app/server'); // Certifique-se que o caminho está correto

describe('Testes da aplicação', () => {
    let server;

    beforeAll(() => {
        server = app.listen(4000); // Inicia o servidor na porta 4000 para testes
    });

    afterAll((done) => {
        server.close(done); // Fecha o servidor após os testes
    });

    test('Deve responder com uma mensagem', async () => {
        const response = await request(server).get('/');
        expect(response.text).toBe('Aplicação web rodando!');
    });
});
