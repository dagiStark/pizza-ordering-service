import {
  Box,
  Button,
  IconButton,
  Switch,
  Tooltip,
  Typography,
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

type Role = {
  roleName: string;
  createdAt: string;
  active: boolean;
};

const RoleCard = () => {
  const [tableData, setTableData] = useState<Role[]>(data);

  // Define the columns with custom renderers for actions
  const columns = useMemo<MRT_ColumnDef<Role>[]>(
    () => [
      {
        accessorKey: "roleName", // Access role name
        header: "Role Name",
        size: 150,
        Cell: ({ cell }) => <Typography>{cell.getValue<string>()}</Typography>,
      },
      {
        accessorKey: "createdAt", // Access creation date
        header: "Created at",
        size: 150,
      },
      {
        accessorKey: "active", // Custom actions column
        header: "Actions",
        size: 200,
        Cell: ({ row }) => (
          <Box display="flex" alignItems="center">
            {/* Switch for active/inactive status */}
            <Switch
              checked={row.original.active}
              onChange={(e) => handleStatusChange(row.index, e.target.checked)}
              color="success"
            />
            <Typography>
              {row.original.active ? "Active" : "Inactive"}
            </Typography>

            {/* View icon */}
            <Tooltip title="View">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>

            {/* Delete icon */}
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDelete(row.index)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    []
  );

  // Handle status change for switch
  const handleStatusChange = (index: number, isActive: boolean) => {
    const updatedData = [...tableData];
    updatedData[index].active = isActive;
    setTableData(updatedData);
  };

  // Handle delete action
  const handleDelete = (index: number) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <Box>
      {/* Add Role Button */}
      <Button
        variant="contained"
        color="warning"
        sx={{ mb: 2 }}
        onClick={() => alert("Add Role Clicked")}
      >
        Add Role
      </Button>

      <MaterialReactTable
        columns={columns}
        data={tableData}
        renderTopToolbarCustomActions={() => (
          <Box display="flex" alignItems="center">
            {/* Refresh Button */}
            <Tooltip title="Refresh">
              <IconButton>
                <RefreshIcon />
              </IconButton>
            </Tooltip>

            {/* Search Button */}
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            {/* Download Button */}
            <Tooltip title="Download CSV">
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </Tooltip>

            {/* Filter List Button */}
            <Tooltip title="Filter">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>

            {/* View Column Button */}
            <Tooltip title="View Columns">
              <IconButton>
                <ViewColumnIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
    </Box>
  );
};

export default RoleCard;

const data: Role[] = [
  {
    roleName: "Kitchen Manager",
    createdAt: "8/14/24",
    active: true,
  },
  {
    roleName: "Cashier",
    createdAt: "8/14/24",
    active: true,
  },
  {
    roleName: "Branch Manager",
    createdAt: "8/14/24",
    active: true,
  },
];
