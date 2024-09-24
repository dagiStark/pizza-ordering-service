const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING }, // ['customer', 'restaurant-manager', 'super-admin']
    restaurantId: { type: DataTypes.INTEGER, allowNull: true }, // For restaurant users
  });

  User.associate = (models) => {
    User.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
    User.hasMany(models.Order, { foreignKey: "customerId" });
  };

  return User;
};
