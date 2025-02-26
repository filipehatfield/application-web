const request = require('supertest');
const { app } = require('../app');

describe('Testes da aplicação web', () => {
    it('Deve responder com status 200 na rota principal', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Aplicação web rodando!');
    });
});
