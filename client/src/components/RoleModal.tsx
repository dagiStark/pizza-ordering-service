import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import useAddRole from "../hooks/useAddRole"; // Custom hook to handle API

const RoleModal = ({ open, onClose, onRoleAdded }) => {
  const { addRole, loading } = useAddRole(); // Hook for API
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState({
    updateOrderStatus: false,
    seeOrders: false,
    addUsers: false,
    seeCustomers: false,
    createRoles: false,
  });

  // Handle checkbox changes
  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const selectedPermissions = Object.keys(permissions).filter(
      (permission) => permissions[permission]
    );

    const newRole = {
      roleName,
      permissions: selectedPermissions,
    };

    try {
      await addRole(newRole); // Send role to backend
      onRoleAdded(newRole); // Update table after adding
      onClose(); // Close modal
    } catch (error) {
      console.error("Failed to add role", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Role</DialogTitle>
      <DialogContent>
        <TextField
          label="Role Name"
          fullWidth
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          margin="normal"
        />

        <Typography>Permissions</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={permissions.updateOrderStatus}
                  onChange={handlePermissionChange}
                  name="updateOrderStatus"
                />
              }
              label="Update Order Status"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={permissions.seeOrders}
                  onChange={handlePermissionChange}
                  name="seeOrders"
                />
              }
              label="See Orders"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={permissions.addUsers}
                  onChange={handlePermissionChange}
                  name="addUsers"
                />
              }
              label="Add Users"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={permissions.seeCustomers}
                  onChange={handlePermissionChange}
                  name="seeCustomers"
                />
              }
              label="See Customers"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={permissions.createRoles}
                  onChange={handlePermissionChange}
                  name="createRoles"
                />
              }
              label="Create Roles"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoleModal;
