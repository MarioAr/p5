module.exports = (sequelize, type) => {
  const Cat = sequelize.define('categories', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: type.STRING,
        allowNull: false
      }
  });

  return Cat;
}