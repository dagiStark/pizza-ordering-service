const bcrypt = require("bcrypt");
const { models } = require("../models");

const getUser = async (req, res) => {
  try {
    // Fetch only the required fields from the User model
    const users = await models.User.findAll();

    // Send the users back in the response
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; 

    // Check if the user exists
    const user = await models.User.findByPk(id); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Delete the user
    await user.destroy(); // Using the instance method destroy() on the user
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      location,
      phoneNo,
      role,
      restaurantId,
    } = req.body;

    // Validate password
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await models.User.create({
      fullName,
      email,
      password: hashedPassword,
      location,
      phoneNo,
      role,
      restaurantId,
    });

    // Respond with the newly created user data (omit password)
    res.status(201).json({
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
      location: newUser.location,
      phoneNo: newUser.phoneNo,
      role: newUser.role,
      restaurantId: newUser.restaurantId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = { getUser, deleteUser, addUser };
