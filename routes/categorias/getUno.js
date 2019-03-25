const path = require('path');
const cat = require(path.join(__dirname, '../../modules/db/')).Categorias;


module.exports = (req, res, next) => {

    let id = req.id;

    try {
        cat.findAll({
            where: {id: id}
        })
        .then(data => {
            res.json(data)
        })
        .catch(() => {
            next();
        })
    } catch (error) {
        next();
    }
}