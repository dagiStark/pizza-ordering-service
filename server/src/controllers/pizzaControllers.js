const multer = require("multer");

const { models } = require("../models");

const storage = multer.memoryStorage();
const uploader = multer({ storage: storage });

const upload = async (req, res) => {
  try {
    const { name, restaurantId, price } = req.body;
    const image = req.file ? req.file.buffer : null;

    const parsedRestaurantId = Number(restaurantId);
    const parsedPrice = price ? Number(price) : null; // If price is provided, parse it

    // Check if parsed values are valid numbers
    if (isNaN(parsedRestaurantId) || parsedRestaurantId <= 0) {
      return res
        .status(400)
        .json({ message: "Invalid restaurantId: must be a positive number." });
    }

    if (parsedPrice !== null && (isNaN(parsedPrice) || parsedPrice <= 0)) {
      return res
        .status(400)
        .json({ message: "Invalid price: must be a positive number." });
    }

    // Create a new pizza entry in the database
    const newPizza = await models.Pizza.create({
      name,
      restaurantId: parsedRestaurantId,
      price: parsedPrice, // Save parsed price
      image, // Save the image buffer
    });

    res
      .status(201)
      .json({ message: "Pizza created successfully", pizza: newPizza });
  } catch (error) {
    console.error("Error creating pizza:", error);
    res
      .status(500)
      .json({ message: "Error creating pizza", error: error.message });
  }
};

module.exports = { upload, uploader };
