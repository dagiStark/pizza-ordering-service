import React, { useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";

// Modal styling
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const UserModal = ({ open, handleClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNo: "",
    restaurantId: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onAddUser(formData); // Callback to send data
    handleClose(); // Close modal after submission
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add New User
        </Typography>
        <TextField
          label="Full Name"
          name="fullName"
          fullWidth
          margin="normal"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          label="Location"
          name="location"
          fullWidth
          margin="normal"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          name="phoneNo"
          fullWidth
          margin="normal"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <TextField
          label="Restaurant ID"
          name="restaurantId"
          fullWidth
          margin="normal"
          value={formData.restaurantId}
          onChange={handleChange}
        />
        <TextField
          label="Role"
          name="role"
          fullWidth
          margin="normal"
          value={formData.role}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default UserModal;
