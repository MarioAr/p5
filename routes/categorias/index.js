const express = require('express');
const Router  = express.Router();
const utils = require('./utils');
const del     = require('./delete'),
    get       = require('./get'),
    getUno    = require('./getUno'),
    post      = require('./post'),
    put       = require('./put');
const test = (req, res) => { res.send("test")}

Router.get('/', get);
Router.get('/:id', utils.getId);
Router.get('/:id', getUno);
// Router.post('/', utils.post);
Router.post('/', post);
Router.put('/:id', utils.getId);
Router.put('/:id', put);
Router.delete('/:id', utils.getId);
Router.delete('/:id', del);
Router.use((req, res, next) => {
    
    req.json({rta: "Error en la aplicacion"});
});

module.exports = Router;