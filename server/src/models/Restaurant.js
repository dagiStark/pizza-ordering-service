const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Restaurant = sequelize.define("Restaurant", {
    name: { type: DataTypes.STRING },
  });

  Restaurant.associate = (models) => {
    Restaurant.hasMany(models.Pizza);
    Restaurant.hasMany(models.Topping);
    Restaurant.hasMany(models.User);
  };

  return Restaurant;
};
