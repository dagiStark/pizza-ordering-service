const bcrypt = require("bcrypt");
const { models } = require("../models");
const generateTokenAndSetCookie = require("../utils/generateToken.js");

const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, restaurantId } =
      req.body; // remember to add restaurantId while sending the request
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password didn't match!" });
    }
    const user = await models.User.findOne({ where: { email } });

    if (user.length >= 1) {
      return res.status(400).json({ error: "username already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await models.User.create({
      fullName,
      email,
      password: hashedPassword,
      restaurantId,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser.id, res);
      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        restaurantId: newUser.restaurantId,
      });
    } else {
      res.status(400).json({ Error: "Failed to create new user" });
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};


const register = async (req, res) => {
  const { name, location, superAdmin, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "password didn't match!" });
  }

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
    // Hash the password for superAdmin
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new restaurant
    const restaurant = await models.Restaurant.create({
      name,
      location,
      superAdmin,
      password: hashedPassword, // Store hashed password for superAdmin
    });

    // Send back the created restaurant details (excluding password)
    return res.status(201).json({
      id: restaurant.id,
      name: restaurant.name,
      location: restaurant.location,
      message: "Restaurant created successfully!",
    });
  } catch (error) {
    console.error("Error during restaurant registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  // finished login
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
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

const logout = async (req, res) => {
  // finished logout
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signup, register, login, logout };
