import {
  Box,
  MenuItem,
  Select,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { MaterialReactTable } from "material-react-table"; // Removed MRT_ColumnDef import
import { useMemo, useState } from "react";
import { Image2 } from "../assets";
import ToppingModal from "./ToppingModal";
import useGetOrders from "../hooks/useGetOrders";
import updateOrderStatus from "../hooks/useUpdateOrderStatus";

const OrdersCard = () => {
  const { orders, loading, error, setOrders } = useGetOrders();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // Removed Packages type

  const columns = useMemo(() => [
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
          {cell.getValue()}
        </Box>
      ),
    },
    {
      accessorKey: "toppings",
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
          value={cell.getValue()}
          onChange={(e) => handleStatusChange(e, row.original.id)}
          sx={{
            backgroundColor:
              cell.getValue() === "Preparing"
                ? "#FFA500"
                : cell.getValue() === "Ready"
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
  ], []);

  const handleToppingClick = (order) => { // Removed Packages type
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleStatusChange = async (event, orderId) => { // Removed React.ChangeEvent
    console.log("Orders array:", orders);
    console.log("orderId:", orderId);

    const newStatus = event.target.value; // Removed type assertion

    // Check if orders are available
    if (!orders.length) {
      console.error("No orders available");
      return;
    }

    // Find the order by id
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex === -1) {
      console.error("Order not found");
      return;
    }

    const order = orders[orderIndex];
    console.log("Order found:", order);

    // Optimistically update the status in the UI
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].status = newStatus;
    setOrders(updatedOrders);

    // Send update request to the API
    try {
      await updateOrderStatus(orderId, newStatus);
    } catch (err) {
      console.error("Error updating order status:", err);
      // Revert the optimistic update if the API call fails
      updatedOrders[orderIndex].status = order.status; // revert to previous status
      setOrders(updatedOrders);
    }
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
