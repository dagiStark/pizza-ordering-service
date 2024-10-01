const { models } = require("../models");

const createOrder = async (req, res) => {
  try {
    const {
      name,
      toppings = [],
      quantity,
      customerNo,
      status = "Preparing",
    } = req.body;

    if (!name || !quantity || !customerNo) {
      return res
        .status(400)
        .json({ error: "Name, quantity, and customerNo are required." });
    }

    const newOrder = await models.Order.create({
      name,
      toppings,
      quantity,
      customerNo,
      status,
    });

    res.status(201).json({
      id: newOrder.id,
      name: newOrder.name,
      toppings: newOrder.toppings,
      quantity: newOrder.quantity,
      customerNo: newOrder.customerNo,
      status: newOrder.status,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOrder = async (req, res) => {
  try {
    const orders = await models.Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching Orders:", error);
    res.status(500).json({ message: "Failed to Orders roles" });
  }
};

module.exports = { createOrder, getOrder };
