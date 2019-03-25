const path = require('path');
const cat = require(path.join(__dirname, '../../modules/db/')).Categorias;


// console.log(db)
module.exports = (req, res, next) => {
    let { name } = req.body;
    try {
        cat.create({name: name})
        .then(data => {
            res.json(data)
        })
        .catch((e) => {
            // console.log(e)
            res.error = e;
            next();
        })
    } catch (error) {
        // console.log(error)
        res.error = error;

        next()
    }
}