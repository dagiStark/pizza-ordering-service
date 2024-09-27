import { Box, Typography, Button, Stack } from "@mui/material";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import NotesIcon from "@mui/icons-material/Notes";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { EmojiPizza } from "../assets";
import MenuCard from "../components/MenuCard";

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

function Dashboard() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
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
      {/* sidebar */}
      <Box>
        <Box>
          <Typography>PIZZA</Typography>
          <NotesIcon />
        </Box>

        <Box>
          <img src={EmojiPizza} alt="pizza" />
        </Box>

        <Box>
          <Stack>
            <Box>
              <Typography>Orders</Typography>
            </Box>
            <Box>
              <Typography>Add Menu</Typography>
            </Box>
            <Box>
              <Typography>Role</Typography>
            </Box>
            <Box>
              <Typography>User</Typography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Box>
            <LogoutIcon />
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Box>

      {/* main content */}

      <Box>
        <Box>
          <Typography>Orders</Typography>
          <Box>
            <NotificationsIcon />
            <AccountCircleIcon />
          </Box>
        </Box>

        <Box>
          <MaterialReactTable table={table} />
          <MenuCard />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];
