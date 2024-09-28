const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Role = sequelize.define('Role', {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Array of strings to store permissions
      allowNull: false,
    },
  });

  return Role;
};
