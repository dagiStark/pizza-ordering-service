const bcrypt = require("bcrypt");
const { models, sequelize } = require("../models");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

const signup = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      location,
      phoneNo,
      restaurantId,
    } = req.body; // remember to add restaurantId while sending the request
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password didn't match!" });
    }
    const user = await models.User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ error: "user already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await models.User.create({
      fullName,
      email,
      password: hashedPassword,
      location,
      phoneNo,
      restaurantId,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser.id, res);
      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        location: newUser.location,
        phoneNo: newUser.phoneNo,
        role: newUser.role,
        restaurantId: newUser.restaurantId,
      });
    } else {
      res.status(400).json({ Error: "Failed to create new user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal server error" });
  }
};

const register = async (req, res) => {
  const {
    name,
    location,
    superAdmin,
    email,
    password,
    confirmPassword,
    phoneNo,
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords didn't match!" });
  }

  // Transaction block
  const transaction = await sequelize.transaction();
  try {
    // Check if a restaurant with the same name already exists
    const existingRestaurant = await models.Restaurant.findOne({
      where: { name },
    });
    if (existingRestaurant) {
      return res
        .status(400)
        .json({ message: "Restaurant with this name already exists" });
    }

    // Check if a user with the same email already exists
    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    // Hash the password for superAdmin
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new restaurant
    const restaurant = await models.Restaurant.create(
      {
        name,
        location,
        superAdmin,
        email,
        password: hashedPassword, // Store hashed password for superAdmin
      },
      { transaction }
    );

    // Create a superAdmin user in the User table
    const user = await models.User.create(
      {
        fullName: superAdmin,
        email,
        password: hashedPassword,
        location,
        phoneNo,
        role: "admin", // Assign the role to super admin
        restaurantId: restaurant.id, // Link the user to the restaurant
      },
      { transaction }
    );

    // Commit the transaction if both restaurant and user were created successfully
    await transaction.commit();

    // Send back the created restaurant and user details (excluding password)
    return res.status(201).json({
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        location: restaurant.location,
        email: restaurant.email,
      },
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        restaurantId: user.restaurantId
      },
      message: "Restaurant and super admin created successfully!",
    });
  } catch (error) {
    // Rollback the transaction in case of an error
    await transaction.rollback();
    console.error("Error during restaurant registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user.id, res);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, register, login, logout };
