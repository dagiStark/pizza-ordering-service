require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { sequelize } = require("./src/models/index.js"); // Sequelize instance for PostgreSQL connection

const api = require("./src/routes/api");
const errorHandler = require("./src/middlewares/errorHandler.js"); // Global error handling middleware

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://pizza-ordering-service-client.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
app.use(morgan("dev")); // Logger for HTTP requests

// Routes
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("Hello");
});

// Global error handling middleware
app.use(errorHandler);

// Connect to PostgreSQL
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync(); // Sync Sequelize models with the database
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Export the app instead of listening on a port
module.exports = app;
