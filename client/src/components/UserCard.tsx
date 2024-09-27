import { Box } from "@mui/material";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";

type Person = {
  name: string;
  phoneNo: string;
  email: string;
  actions: string;
};

const UserCard = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "phoneNo",
        header: "Phone No",
        size: 150,
      },
      {
        accessorKey: "email", //normal accessorKey
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "actions",
        header: "Actions",
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

export default UserCard;

const data: Person[] = [
  {
    name: "Jhon cale",
    phoneNo: "+565-58-55",
    email: "EastDaphne@gmail.com",
    actions: "Kentucky",
  },
  {
    name: "Jhon cale",
    phoneNo: "+565-58-55",
    email: "EastDaphne@gmail.com",
    actions: "Kentucky",
  },
  {
    name: "Jhon cale",
    phoneNo: "+565-58-55",
    email: "EastDaphne@gmail.com",
    actions: "Kentucky",
  },
  {
    name: "Jhon cale",
    phoneNo: "+565-58-55",
    email: "EastDaphne@gmail.com",
    actions: "Kentucky",
  },
  {
    name: "Jhon cale",
    phoneNo: "+565-58-55",
    email: "EastDaphne@gmail.com",
    actions: "Kentucky",
  },
];
