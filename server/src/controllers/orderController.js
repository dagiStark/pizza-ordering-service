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

const updateOrder = async (req, res) => {
  const { id } = req.params; // Order ID from the URL
  const { status } = req.body; // New status from the request body

  try {
    const order = await models.Order.findByPk(id); // Find the order by primary key
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order status
    order.status = status;
    await order.save(); // Save the changes to the database

    res.json(order); // Return the updated order
  } catch (error) {
    console.error("Failed to update order:", error);
    res.status(500).json({ message: "Failed to update order" });
  }
};


module.exports = { createOrder, getOrder, updateOrder };
