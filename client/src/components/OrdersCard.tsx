import { Box } from "@mui/material";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";

type Packages = {
  name: string;
  topping: string;
  quantity: string;
  phoneNo: string;
  createdAt: string;
  status: string;
};

const OrdersCard = () => {
  const columns = useMemo<MRT_ColumnDef<Packages>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "topping", //normal accessorKey
        header: "Topping",
        size: 200,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 150,
      },
      {
        accessorKey: "phoneNo",
        header: "Customer No",
        size: 150,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default OrdersCard;

const data: Packages[] = [
  {
    name: "Pizza",
    topping: "Tommato",
    quantity: "4",
    phoneNo: "+251-95-64-52",
    createdAt: "sep 35, 2023",
    status: "delivered",
  },
  {
    name: "Pizza",
    topping: "Tommato",
    quantity: "4",
    phoneNo: "+251-95-64-52",
    createdAt: "sep 35, 2023",
    status: "delivered",
  },
  {
    name: "Pizza",
    topping: "Tommato",
    quantity: "4",
    phoneNo: "+251-95-64-52",
    createdAt: "sep 35, 2023",
    status: "delivered",
  },
  {
    name: "Pizza",
    topping: "Tommato",
    quantity: "4",
    phoneNo: "+251-95-64-52",
    createdAt: "sep 35, 2023",
    status: "delivered",
  },
];
