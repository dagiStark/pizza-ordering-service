import {
  Box,
  Button,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";

type Person = {
  name: string;
  phoneNo: string;
  email: string;
  active: boolean;
};

const UserCard = () => {
  const [tableData, setTableData] = useState<Person[]>(data);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name", // Access name
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
              onChange={(e) => handleStatusChange(row.index, e.target.checked)}
              color="success"
            />
            <Typography>
              {row.original.active ? "Active" : "Inactive"}
            </Typography>

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
      {/* Add User Button */}
      <Button
        variant="contained"
        color="warning"
        sx={{ mb: 2 }}
        onClick={() => alert("Add User Clicked")}
      >
        Add User
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

export default UserCard;

// Example data
const data: Person[] = [
  {
    name: "Abebe Bekele",
    phoneNo: "+251 1523654789",
    email: "thisis@gmail.com",
    active: true,
  },
  {
    name: "Abebe Bekele",
    phoneNo: "+251 1523654789",
    email: "thisis@gmail.com",
    active: true,
  },
  {
    name: "Abebe Bekele",
    phoneNo: "+251 1523654789",
    email: "thisis@gmail.com",
    active: true,
  },
  {
    name: "Abebe Bekele",
    phoneNo: "+251 1523654789",
    email: "thisis@gmail.com",
    active: true,
  },
  {
    name: "Abebe Bekele",
    phoneNo: "+251 1523654789",
    email: "thisis@gmail.com",
    active: true,
  },
];
