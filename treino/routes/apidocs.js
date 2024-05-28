const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('yaml');
 

const router = express.Router();

const file = fs.readFileSync('./swagger.yaml', 'utf8')

const swaggerDocument = yaml.parse(file);

router.use('/', swaggerUi.serve);

router.get('/', swaggerUi.setup(swaggerDocument))




module.exports = router;