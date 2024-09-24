const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Topping = sequelize.define('Topping', {
    name: { type: DataTypes.STRING },
    restaurantId: { type: DataTypes.INTEGER },
  });

  Topping.associate = (models) => {
    Topping.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' });
  };

  return Topping;
};
