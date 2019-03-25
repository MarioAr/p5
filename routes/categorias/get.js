const path = require('path');
const cat = require(path.join(__dirname, '../../modules/db/')).Categorias;



module.exports = (req, res, next) => {

    try {
        cat.findAll({})
        .then(data => {
            res.json(data)
        })
        .catch((e) => {
            console.log(e)
            next();
        })
    } catch (error) {
        console.log(error)
        next();
    }
}