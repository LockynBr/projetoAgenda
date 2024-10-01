const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Luiz', sobrenome: 'Miranda'};

//     console.log('Passei no seu middleware.');
//     next(); //Temos que passar o next, assim será chamada a próxima rota
// }

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.numeroTelefone);

module.exports = route;