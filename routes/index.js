var express = require('express');
var router = express.Router();
const productos = require('./productos');
const categorias = require('./categorias');
/* GET home page. */
router.use('/productos', productos);
router.use('/categorias', categorias);

module.exports = router;
