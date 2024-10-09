const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Include port
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Supabase requires SSL
        rejectUnauthorized: false, // Necessary for Supabase SSL
      },
    },
  }
);

const models = {
  User: require("./User")(sequelize),
  Restaurant: require("./Restaurant")(sequelize),
  Pizza: require("./Pizza")(sequelize),
  Topping: require("./Topping")(sequelize),
  Order: require("./Order")(sequelize),
  Role: require("./Role")(sequelize),
};

module.exports = { sequelize, models };
