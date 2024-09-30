const { models } = require("../models");

const createRole = async (req, res) => {
  try {
    const { roleName, permissions } = req.body;
    // Create the role in the database
    const newRole = await models.Role.create({
      roleName,
      permissions,
      active: true,
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
  try {
    const roles = await models.Role.findAll();

    res.status(200).json(roles);
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({ message: "Failed to fetch roles" });
  }
};

const deleteRole = async (req, res) => {
  const { id } = req.params;

  try {
    const role = await models.Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    await role.destroy(); // Delete the role
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error("Error deleting role:", error);
    res.status(500).json({ message: "Failed to delete role" });
  }
};

module.exports = { createRole, getRole, deleteRole };
