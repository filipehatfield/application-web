const request = require('supertest');
const app = require('../app/app'); // Corrigido o caminho para acessar app.js
let server;

describe('Testes da aplicação', () => {
    beforeAll(() => {
        server = app.listen(4000); // Inicia o servidor na porta 4000 para testes
    });

    afterAll((done) => {
        server.close(done); // Fecha o servidor após os testes
    });

    test('Deve responder com uma mensagem', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, world!');
    });
});
