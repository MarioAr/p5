const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    const Prod = sequelize.define('products', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: type.STRING,
          allowNull: false
        },
        price: {
          type: type.INTEGER,
          allowNull: false
        },
        description: {
          type: type.STRING,
          allowNull: false,
          get: function() {
            
            let txt = this.getDataValue('description');
            if (txt)
              txt = txt.substring(0, 20);
            return `${txt}...`
          },
        },
        available: {
          type: type.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        categoryId: {
          type: type.INTEGER,
          allowNull: false,
          references: {
            // This is a reference to another model
            model: 'categories',
       
            // This is the column name of the referenced model
            key: 'id',
       
            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
          }
        }
    });

    return Prod
}
