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
        const { email } = req.params;
    
        // Check if the user exists
        const user = await User.findOne({ where: { email } });
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        // Delete the user
        await User.destroy({ where: { email } });
    
        return res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
};
const addUser = async (req, res) => {};

module.exports = { getUser, deleteUser, addUser };
