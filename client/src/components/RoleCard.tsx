import {
  Box,
  Button,
  IconButton,
  Switch,
  Tooltip,
  Typography,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import RoleModal from "./RoleModal";
import useFetchRoles from "../hooks/useFetchRoles"; // Custom hook to fetch roles
import toast from "react-hot-toast"; // Optional for success/failure notifications

// Define a TypeScript interface for the Role
interface Role {
  id: string;
  roleName: string;
  createdAt: string;
  active: boolean;
}

const RoleCard = () => {
  const { roles, loading, fetchRoles } = useFetchRoles(); // Custom hook for fetching roles
  const [openModal, setOpenModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Handle role addition
  const handleRoleAdded = (newRole: Role) => {
    fetchRoles(); // Refetch the roles after adding a new role
  };

  // Define the columns with custom renderers for actions
  const columns = useMemo<MRT_ColumnDef<Role>[]>(() => [
    {
      accessorKey: "roleName",
      header: "Role Name",
      size: 150,
      Cell: ({ cell }) => <Typography>{cell.getValue<string>()}</Typography>,
    },
    {
      accessorKey: "createdAt",
      header: "Created at",
      size: 150,
    },
    {
      accessorKey: "active",
      header: "Actions",
      size: 200,
      Cell: ({ row }) => (
        <Box display="flex" alignItems="center">
          <Switch
            checked={row.original.active}
            onChange={(e) => handleStatusChange(row.index, e.target.checked)}
            color="success"
          />
          <Typography>{row.original.active ? "Active" : "Inactive"}</Typography>
          <Tooltip title="View">
            <IconButton>
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(row.index, row.original.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ], [roles]);

  const handleStatusChange = (index: number, isActive: boolean) => {
    const updatedRoles = [...roles];
    updatedRoles[index].active = isActive;
    // Update the state and optionally the backend
  };

  const handleDelete = async (index: number, roleId: string) => {
    setDeleteLoading(true);
    try {
      const response = await fetch(`/api/role/delete/${roleId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete role");
      }

      const updatedRoles = roles.filter((_, i) => i !== index);
      fetchRoles(); // Refetch roles after delete
      toast.success("Role deleted successfully");
    } catch (error) {
      console.error("Failed to delete role:", error);
      toast.error("Failed to delete role");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading || deleteLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Button
        variant="contained"
        color="warning"
        sx={{ mb: 2 }}
        onClick={() => setOpenModal(true)}
      >
        Add Role
      </Button>

      <MaterialReactTable
        columns={columns}
        data={roles}
        renderTopToolbarCustomActions={() => (
          <Box display="flex" alignItems="center">
            <Tooltip title="Refresh">
              <IconButton onClick={fetchRoles}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download CSV">
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View Columns">
              <IconButton>
                <ViewColumnIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />

      <RoleModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onRoleAdded={handleRoleAdded}
      />
    </Box>
  );
};

export default RoleCard;
