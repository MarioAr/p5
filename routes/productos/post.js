const path = require('path');
const prod = require(path.join(__dirname, '../../modules/db/')).Productos;

module.exports = (req, res, next) => {

    try {
        prod.create({...req.body})
        .then(data => {
            res.json(data)
        })
        .catch((e) => {
            res.error = e;
            console.log(e)
            next();
        })
    } catch (error) {
        console.log(error)
        res.error = error;
        next()
    }
}
