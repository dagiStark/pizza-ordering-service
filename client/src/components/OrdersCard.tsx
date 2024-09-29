import {
  Box,
  Chip,
  MenuItem,
  Select,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
} from "material-react-table";
import { useMemo, useState } from "react";
import { Image2 } from "../assets";

type Packages = {
  name: string;
  topping: string;
  quantity: number;
  phoneNo: string;
  createdAt: string;
  status: string;
};

const OrdersCard = () => {
  const [tableData, setTableData] = useState<Packages[]>(data);

  // Define columns with custom renderers for the topping and status
  const columns = useMemo<MRT_ColumnDef<Packages>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
        Cell: ({ cell }) => (
          <Box display="flex" alignItems="center">
            <img
              src={Image2}
              alt="pizza"
              width={20}
              height={20}
              style={{ borderRadius: "50%", marginRight: 8 }}
            />
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: "topping",
        header: "Topping",
        size: 200,
        Cell: ({ cell }) => (
          <Box display="flex" alignItems="center">
            <VisibilityIcon sx={{ color: "#FF8100", marginRight: 1 }} />
            <Typography sx={{ color: "#FF8100" }}>Toppings</Typography>
          </Box>
        ),
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 100,
      },
      {
        accessorKey: "phoneNo",
        header: "Customer No",
        size: 200,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 200,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell, row }) => (
          <Select
            value={cell.getValue<string>()}
            onChange={(e) => handleStatusChange(e, row.index)}
            sx={{
              backgroundColor:
                cell.getValue<string>() === "Preparing"
                  ? "#FF8100"
                  : cell.getValue<string>() === "Ready"
                  ? "#28a745"
                  : "#28a745",
              color: "#fff",
              borderRadius: 2,
              padding: "4px 8px",
              fontWeight: "bold",
            }}
          >
            <MenuItem value="Preparing">Preparing</MenuItem>
            <MenuItem value="Ready">Ready</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
          </Select>
        ),
      },
    ],
    []
  );

  // Handle status change
  const handleStatusChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    rowIndex: number
  ) => {
    const updatedData = [...tableData];
    updatedData[rowIndex].status = event.target.value as string;
    setTableData(updatedData);
  };

  return (
    <Box>
      <MaterialReactTable
        columns={columns}
        data={tableData}
        renderTopToolbarCustomActions={() => (
          <Tooltip title="Export to CSV">
            <IconButton onClick={() => alert("Export to CSV")}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
        )}
        enableRowActions
        enableStickyHeader
      />
    </Box>
  );
};

export default OrdersCard;

const data: Packages[] = [
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 4,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 3,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 1,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Ready",
  },
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 6,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 2,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Ready",
  },
  {
    name: "Pizza",
    topping: "Toppings",
    quantity: 1,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Delivered",
  },
];
