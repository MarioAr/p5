const path = require('path');
const cat = require(path.join(__dirname, '../../modules/db/')).Categorias;


module.exports = (req, res, next) => {

    let { id, body } = req;
    delete body.id;
    try {
        cat.update({
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