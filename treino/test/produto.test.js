const request = require('supertest');
const app = require('../app');

describe('Testes para rotas de produto', ()=> {

    let id = null;

    it('deve criar um produto', async () => {
        const response = await request(app)
        .post('/produtos')
        .send({nome: uva, preco: 20.0});
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('nome', 'uva')
        expect(response.body).toHaveProperty('preco', '20.0')
        id = response.body._id.toString();
        
   })

   it('deve retornar um erro de validação ao tentar criar um produto invalido', async (){
        const response = await request(app)
        .post('/produtos')
        .send({})
        expect(response.status).toBe(422);
        expect(response.body).toHaveProperty('msg', 'Dados do produto invalidos')

   })

})

