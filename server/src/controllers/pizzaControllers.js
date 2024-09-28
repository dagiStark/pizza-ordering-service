const multer = require("multer");

const { models, sequelize } = require("../models");

const storage = multer.memoryStorage();
const uploader = multer({ storage: storage });

const upload = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { name, restaurantId, price, topping } = req.body;
    const image = req.file ? req.file.buffer : null;

    const parsedRestaurantId = Number(restaurantId);
    const parsedPrice = price ? Number(price) : null;

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
    const newPizza = await models.Pizza.create(
      {
        name,
        restaurantId: parsedRestaurantId,
        price: parsedPrice, // Save parsed price
        image, // Save the image buffer
      },
      { transaction }
    );

    if (topping && Array.isArray(topping)) {
      const toppingPromises = topping.map((toppingName) =>
        models.Topping.create(
          {
            name: toppingName,
            restaurantId,
          },
          { transaction }
        )
      );

      await Promise.all(toppingPromises);
    }

    await transaction.commit();

    res
      .status(201)
      .json({
        message: "Pizza and topping created successfully",
        pizza: newPizza,
      });
  } catch (error) {
    console.error("Error creating pizza and topping:", error);
    res
      .status(500)
      .json({
        message: "Error creating pizza and topping",
        error: error.message,
      });
  }
};

module.exports = { upload, uploader };
