//const request = require('supertest');
//const { app } = require('../app/server');
//
//describe('Testes da aplicação web', () => {
//    it('Deve responder com status 200 na rota principal', async () => {
//        const response = await request(app).get('/');
//        expect(response.status).toBe(200);
//        expect(response.text).toBe('Aplicação web rodando!');
//    });
//});


const request = require('supertest');
const app = require('../app/server'); // Corrija esse caminho conforme a estrutura do projeto

test('Deve responder com uma mensagem', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Aplicação web rodando!');
});
