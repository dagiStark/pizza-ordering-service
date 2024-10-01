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
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";
import { Image2 } from "../assets";
import ToppingModal from "./ToppingModal"; // Import the ToppingModal component

type Packages = {
  name: string;
  topping: string[];
  quantity: number;
  phoneNo: string;
  createdAt: string;
  status: string;
};

const OrdersCard = () => {
  const [tableData, setTableData] = useState<Packages[]>(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Packages | null>(null);

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
        Cell: ({ row }) => (
          <Box display="flex" alignItems="center">
            <Tooltip title="View Toppings">
              <IconButton onClick={() => handleToppingClick(row.original)}>
                <VisibilityIcon sx={{ color: "#FF8100", marginRight: 1 }} />
              </IconButton>
            </Tooltip>
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
                  ? "#FFA500"
                  : cell.getValue<string>() === "Ready"
                  ? "#008000"
                  : "#008000",
              color: "#ffffff",
              borderRadius: 2,
              fontSize: "12px",
              padding: "1px 5px",
              height: "32px",
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

  // Handle topping icon click to open the modal
  const handleToppingClick = (order: Packages) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

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
          <Typography fontWeight="bold" fontSize="18px" color="#7a7676">
            Packages
          </Typography>
        )}
        enableRowActions={false}
        enableStickyHeader
      />

      {/* ToppingModal to show order details */}
      <ToppingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        order={selectedOrder}
      />
    </Box>
  );
};

export default OrdersCard;

const data: Packages[] = [
  {
    name: "Pizza",
    topping: ["Cheese", "Olives", "Mushrooms"], // Example toppings
    quantity: 4,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: ["Pepperoni", "Onions"], // Example toppings
    quantity: 3,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: ["Bell Peppers"], // Example toppings
    quantity: 1,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Ready",
  },
  {
    name: "Pizza",
    topping: ["Spinach", "Cheese"], // Example toppings
    quantity: 6,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Preparing",
  },
  {
    name: "Pizza",
    topping: ["Tomato", "Basil"], // Example toppings
    quantity: 2,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Ready",
  },
  {
    name: "Pizza",
    topping: ["Olives"], // Example toppings
    quantity: 1,
    phoneNo: "+251 1523654789",
    createdAt: "2:44 PM 8/14/24",
    status: "Delivered",
  },
];
