const path = require('path');
const db = require(path.join(__dirname, '../../modules/db/'));
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const prod = db.Productos;
const cat = db.Categorias;
// prod.hasOne(cat);
prod.belongsTo(cat);
module.exports = (req, res, next) => {

    let { query } = req;
    let lista;
    let busqueda = {
        include: [
            {
                all: true,
                attributes: ['id', 'name']
            }        
        ]
    };
    if ( query && query.categories ) {
        lista = query.categories.split(',');
        let o = {
            "name": {
                [Op.like]: { [Op.any]: [...lista] }
            }
        }
        busqueda.include[0].where = o;
        // console.log('->', lista)
    }    
    

    try {
        prod.findAll(busqueda)
        .then(data => {            
            res.json(data)
        })
        .catch(e => {
            // console.log(e)
            next();
        })
    } catch (error) {
        console.log(error)
        next();
    }
}