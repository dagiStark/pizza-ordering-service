const { models } = require("../models");

const createOrder = async (req, res) => {
  try {
    const { customerId, pizzaId, restaurantId, status } = req.body;

    // Check if customer, pizza, and restaurant exist
    const customer = await models.User.findByPk(customerId);
    const pizza = await models.Pizza.findByPk(pizzaId);
    const restaurant = await models.Restaurant.findByPk(restaurantId);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Create new order
    const newOrder = await models.Order.create({
      customerId,
      pizzaId,
      restaurantId,
      status: status || "Preparing", // Default status if not provided
    });

    // Respond with the created order
    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({
      message: "Error while creating order",
      error: error.message,
    });
  }
};

module.exports = { createOrder };
