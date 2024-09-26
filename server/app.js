require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./src/models/index.js"); // Sequelize instance for PostgreSQL connection

const authRoutes = require("./src/routes/authRoutes.js");
// const restaurantRoutes = require("./routes/restaurants");
// const pizzaRoutes = require("./routes/pizzas");
// const orderRoutes = require("./routes/orders");

// const { abilityMiddleware } = require("./middlewares/authorization"); // CASL middleware for role-based actions
const errorHandler = require("./src/middlewares/errorHandler.js"); // Global error handling middleware

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logger for HTTP requests
// app.use(abilityMiddleware); // Apply CASL authorization abilities

// Routes
app.use("/api/auth", authRoutes); // Routes for user registration and login
app.get("/", (req, res) => res.send("Welcome"))
// app.use("/restaurants", restaurantRoutes); // Routes for restaurant management
// app.use("/pizzas", pizzaRoutes); // Routes for pizza and toppings management
// app.use("/orders", orderRoutes); // Routes for order management

// Global error handling middleware
app.use(errorHandler);

// Connect to PostgreSQL and start server
const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync(); // Sync Sequelize models with the database
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
