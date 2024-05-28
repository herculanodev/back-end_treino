var express = require('express');
var router = express.Router();
var controllerProdutos = require('../controller/produto')

router.post('/produtos', controllerProdutos.validar, controllerProdutos.criar)
module.exports = router;
