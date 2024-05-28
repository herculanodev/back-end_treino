var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');  // Certifique-se de que o nome do pacote está correto

// Carrega as configurações do arquivo .env
dotenv.config();  // Chamada correta da função config

var app = express();

// Configurações do MongoDB
var mongoDBURL = process.env.MONGODB_URL;
mongoose.connect(mongoDBURL)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Importa e usa o middleware de rotas para a documentação da API
var routerApidocs = require('./routes/apidocs');
app.use('/api-docs', routerApidocs);

var routerProdutos = require('./routes/produto')
app.use('/produtos', routerProdutos);

module.exports = app;
