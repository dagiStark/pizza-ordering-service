const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pizza = sequelize.define("Pizza", {
    name: { type: DataTypes.STRING },
    restaurantId: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT },
    image: { type: DataTypes.BLOB("long") }, // Store image as BLOB
  });

  Pizza.associate = (models) => {
    Pizza.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
    Pizza.hasMany(models.Topping, { as: "defaultToppings" });
  };

  return Pizza;
};
