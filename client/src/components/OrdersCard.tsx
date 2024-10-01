import {
  Box,
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
import useGetOrders from "../hooks/useGetOrders"; // Import the custom hook

type Packages = {
  name: string;
  topping: string[];
  quantity: number;
  customerNo: string;
  createdAt: string;
  status: string;
};

const OrdersCard = () => {
  const { orders, loading, error } = useGetOrders(); // Use the custom hook to get orders
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
        accessorKey: "customerNo",
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
    const updatedData = [...orders];
    updatedData[rowIndex].status = event.target.value as string;
    // Assuming you send a request to the backend to update the status
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box>
      <MaterialReactTable
        columns={columns}
        data={orders}
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
