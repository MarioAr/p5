const path = require('path');
const prod = require(path.join(__dirname, '../../modules/db/')).Productos;


module.exports = (req, res, next) => {
    let id = req.id;
    try {
        prod.destroy({
        where: {
                id: id
            }
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