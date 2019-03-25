const path = require('path');
const cat = require(path.join(__dirname, '../../modules/db/')).Categorias;


module.exports = (req, res, next) => {
    let id = req.id;
    try {
        cat.destroy({
        where: {
                id: id
            }
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {

            next();
        })
    } catch (error) {
        next();
    }
}