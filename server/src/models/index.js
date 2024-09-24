const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const models = {
  User: require("./User")(sequelize),
  Restaurant: require("./Restaurant")(sequelize),
  Pizza: require("./Pizza")(sequelize),
  Topping: require("./Topping")(sequelize),
  Order: require("./Order")(sequelize),
};

module.exports = { sequelize, models };
