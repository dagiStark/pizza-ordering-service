import { Box, Button, IconButton, Switch, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import useUserOperations from "../hooks/useUserOperations"; // Import the custom hook
import UserModal from "../components/UserModal"; // Import the UserModal component for adding users
import RefreshIcon from "@mui/icons-material/Refresh";

type Person = {
  id: string;
  fullName: string;
  phoneNo: string;
  email: string;
  active: boolean;
};

const UserCard = () => {
  const { users, addUser, deleteUser, loading } = useUserOperations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => [
    {
      accessorKey: "fullName", // Access name
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "phoneNo", // Access phone number
      header: "Phone No",
      size: 150,
    },
    {
      accessorKey: "email", // Access email
      header: "Email",
      size: 200,
    },
    {
      accessorKey: "active", // Actions column
      header: "Actions",
      size: 150,
      Cell: ({ row }) => (
        <Box display="flex" alignItems="center">
          {/* Switch for active/inactive status */}
          <Switch
            checked={row.original.active}
            onChange={(e) => handleStatusChange(row.original.id, e.target.checked)}
            color="success"
          />
          <Typography>
            {row.original.active ? "Active" : "Inactive"}
          </Typography>

          {/* Delete icon */}
          <Tooltip title="Delete">
            <IconButton onClick={() => deleteUser(row.original.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ], [deleteUser]);

  // Handle status change for switch (this can be expanded with a backend call if necessary)
  const handleStatusChange = (userId: string, isActive: boolean) => {
    // Optional: Update the user's active status with a backend call
  };

  // Open/close UserModal
  const handleAddUserModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleAddUserModalClose = () => {
    setIsModalOpen(false);
  };

  // Handle adding user from modal form submission
  const handleAddUser = (userDetails: Omit<Person, 'id'>) => {
    addUser(userDetails); // Add user using the custom hook
    handleAddUserModalClose(); // Close modal after adding
  };

  return (
    <Box>
      {/* Add User Button */}
      <Button
        variant="contained"
        color="warning"
        sx={{ mb: 2 }}
        onClick={handleAddUserModalOpen}
      >
        Add User
      </Button>

      {/* Refresh Button */}
      <Tooltip title="Refresh">
        <IconButton onClick={() => window.location.reload()}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>

      {/* Material React Table */}
      <MaterialReactTable columns={columns} data={users} isLoading={loading} />

      {/* User Modal for adding new users */}
      <UserModal open={isModalOpen} onClose={handleAddUserModalClose} onSubmit={handleAddUser} />
    </Box>
  );
};

export default UserCard;
