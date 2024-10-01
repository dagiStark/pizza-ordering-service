const multer = require("multer");

const { models, sequelize } = require("../models");

const storage = multer.memoryStorage();
const uploader = multer({ storage });

const upload = async (req, res) => {
  console.log("request started....");

  // Start transaction
  const transaction = await sequelize.transaction();
  try {
    const { name, restaurantId, price, topping } = req.body;
    const image = req.file ? req.file.buffer : null;

    const parsedRestaurantId = Number(restaurantId);
    const parsedPrice = price ? Number(price) : null;

    // Validate restaurantId and price
    if (isNaN(parsedRestaurantId) || parsedRestaurantId <= 0) {
      return res.status(400).json({
        message: "Invalid restaurantId: must be a positive number.",
      });
    }

    if (parsedPrice !== null && (isNaN(parsedPrice) || parsedPrice <= 0)) {
      return res.status(400).json({
        message: "Invalid price: must be a positive number.",
      });
    }

    // Create a new pizza entry in the database
    const newPizza = await models.Pizza.create(
      {
        name,
        restaurantId: parsedRestaurantId,
        price: parsedPrice,
        image, // Store image buffer
      },
      { transaction }
    );

    // Create toppings if provided
    if (topping && Array.isArray(topping)) {
      const toppingPromises = topping.map((toppingName) =>
        models.Topping.create(
          {
            name: toppingName,
            restaurantId: parsedRestaurantId, // Ensure restaurantId is sent
          },
          { transaction }
        )
      );

      // Wait for all toppings to be created
      await Promise.all(toppingPromises);
    }

    // Commit the transaction after all operations are successful
    await transaction.commit();

    // Respond with success
    res.status(201).json({
      message: "Pizza and toppings created successfully",
      pizza: newPizza,
    });
  } catch (error) {
    console.error("Error creating pizza and toppings:", error);

    // Rollback the transaction in case of error
    await transaction.rollback();

    res.status(500).json({
      message: "Error creating pizza and toppings",
      error: error.message,
    });
  }
};

module.exports = { upload, uploader };
