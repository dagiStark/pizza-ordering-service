const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    status: {
      type: DataTypes.ENUM("Preparing", "Ready", "Delivered"),
      defaultValue: "Preparing",
    },
    customerId: { type: DataTypes.INTEGER },
    pizzaId: { type: DataTypes.INTEGER },
    restaurantId: { type: DataTypes.INTEGER },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "customerId" });
    Order.belongsTo(models.Pizza, { foreignKey: "pizzaId" });
    Order.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
  };

  return Order;
};
