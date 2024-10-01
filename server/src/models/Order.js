const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toppings: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Preparing", "Ready", "Delivered"),
      defaultValue: "Preparing",
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "customerId" });
    Order.belongsTo(models.Pizza, { foreignKey: "pizzaId" });
    Order.belongsTo(models.Restaurant, { foreignKey: "restaurantId" });
  };

  return Order;
};
