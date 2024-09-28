require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { sequelize } = require("./src/models/index.js"); // Sequelize instance for PostgreSQL connection

const authRoutes = require("./src/routes/authRoutes");
const pizzaRoutes = require("./src/routes/pizzaRoutes");
const roleRoutes = require("./src/routes/roleRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

// const { abilityMiddleware } = require("./middlewares/authorization"); // CASL middleware for role-based actions
const errorHandler = require("./src/middlewares/errorHandler.js"); // Global error handling middleware

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logger for HTTP requests
// app.use(abilityMiddleware); // Apply CASL authorization abilities

// Routes
app.use("/auth", authRoutes);
app.use("/pizza", pizzaRoutes);
app.use("/role", roleRoutes);
app.use("/order", orderRoutes);

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
