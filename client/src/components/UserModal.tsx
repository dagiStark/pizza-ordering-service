import { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const UserModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    phoneNo: "",
    role: "",
    restaurantId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.password || formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onSubmit(formData); // Call the parent component's onSubmit handler
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 400,
          p: 4,
          bgcolor: "background.paper",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the modal
          borderRadius: 2,
          boxShadow: 24, // Add shadow for better visibility
        }}
      >
        <Typography variant="h6" align="center">Add New User</Typography>
        <TextField
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <TextField
          name="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          name="phoneNo"
          label="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <TextField
          name="restaurantId"
          label="Restaurant ID"
          value={formData.restaurantId}
          onChange={handleChange}
        />
        <TextField
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default UserModal;
