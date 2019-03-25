const Sequelize = require('sequelize');
const models = require('./models');

const sequelize = new Sequelize('p5', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});


const Productos = models.productos(sequelize, Sequelize)
const Categorias = models.categorias(sequelize, Sequelize)
// Productos.hasMany(Categorias, {as: 'category'})
module.exports = {
    Productos,
    Categorias
}


// sequelize.sync({ force: true })
// .then(() => {
// console.log(`Database & tables created!`)
// })

// sequelize
// .authenticate()
// .then(() => {
// console.log('Connection has been established successfully.');
// })
// .catch(err => {
// console.error('Unable to connect to the database:', err);
// });