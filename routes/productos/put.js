const path = require('path');
const prod = require(path.join(__dirname, '../../modules/db/')).Productos;

module.exports = (req, res, next) => {
    let { id, body } = req;
    delete body.id;
    try {
        prod.update({
            ...body
        }, {
            where: {id: id}
        })
        .then(data => {
            res.json(data)
        })
        .catch((e) => {
            res.error = e;
            next();
        })
    } catch (error) {
        res.error = error;
        next()
    }
}