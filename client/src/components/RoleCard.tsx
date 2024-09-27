import { Box } from "@mui/material";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";

type Role = {
  roleName: string;
  createdAt: string;
  actions: string;
};

const RoleCard = () => {
  const columns = useMemo<MRT_ColumnDef<Role>[]>(
    () => [
      {
        accessorKey: "roleName", //access nested data with dot notation
        header: "Role Name",
        size: 150,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 150,
      },
      {
        accessorKey: "actions", //normal accessorKey
        header: "Actions",
        size: 200,
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

export default RoleCard;

const data: Role[] = [
  {
    roleName:"kitchen Manager",
    createdAt: "2/5/08",
    actions: "active",
  },
  {
    roleName:"kitchen Manager",
    createdAt: "2/5/08",
    actions: "active",
  },
  {
    roleName:"kitchen Manager",
    createdAt: "2/5/08",
    actions: "active",
  },
  {
    roleName:"kitchen Manager",
    createdAt: "2/5/08",
    actions: "active",
  },
  {
    roleName:"kitchen Manager",
    createdAt: "2/5/08",
    actions: "active",
  },
 
];
