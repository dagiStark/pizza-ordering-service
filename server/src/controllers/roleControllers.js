const { models } = require("../models");

const createRole = async (req, res) => {
  try {
    const { roleName, permissions } = req.body;
    // Create the role in the database
    const newRole = await models.Role.create({
      roleName,
      permissions,
    });

    // Respond with the created role
    res.status(201).json({
      message: "Role created successfully",
      role: newRole,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating role",
      error: error.message,
    });
  }
};


const getRole = async (req, res) => {

}

module.exports = { createRole, getRole };
