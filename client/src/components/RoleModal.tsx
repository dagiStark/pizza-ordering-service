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

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  const handleSubmit = async () => {
    const selectedPermissions = Object.keys(permissions).filter(
      (permission) => permissions[permission]
    );

    const newRole = {
      roleName,
      permissions: selectedPermissions,
    };

    try {
      await addRole(newRole);
      onRoleAdded(newRole);
      onClose();
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
          {Object.keys(permissions).map((permission) => (
            <Grid item xs={6} key={permission}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={permissions[permission]}
                    onChange={handlePermissionChange}
                    name={permission}
                  />
                }
                label={permission.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              />
            </Grid>
          ))}
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
