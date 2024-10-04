import {
  Box,
  Button,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { MaterialReactTable } from "material-react-table";
import { useMemo, useState } from "react";
import useUserOperations from "../hooks/useUserOperations"; // Import the custom hook
import UserModal from "../components/UserModal"; // Import the UserModal component for adding users
import useAddUser from "../hooks/useAddUser";

const UserCard = () => {
  const { users, deleteUser } = useUserOperations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addUser, loading } = useAddUser();

  const columns = useMemo(
    () => [
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
              onChange={(e) =>
                handleStatusChange(row.original.id, e.target.checked)
              }
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
    ],
    [deleteUser]
  );

  // Handle status change for switch (this can be expanded with a backend call if necessary)
  const handleStatusChange = (userId, isActive) => {
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
  const handleAddUser = (userDetails) => {
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

      {/* Material React Table */}
      <MaterialReactTable columns={columns} data={users} isLoading={loading} />

      {/* User Modal for adding new users */}
      <UserModal
        open={isModalOpen}
        onClose={handleAddUserModalClose}
        onSubmit={handleAddUser}
      />
    </Box>
  );
};

export default UserCard;
