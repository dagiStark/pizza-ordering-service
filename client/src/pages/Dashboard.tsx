import {
  Box,
  Typography,
  Stack,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { EmojiPizza } from "../assets";
import OrdersCard from "../components/OrdersCard";
import MenuCard from "../components/MenuCard";
import RoleCard from "../components/RoleCard";
import UserCard from "../components/UserCard";
import { useState } from "react";

function Dashboard() {
  const [selected, setSelected] = useState("Orders");

  const renderContent = () => {
    switch (selected) {
      case "Orders":
        return <OrdersCard />;
      case "Add Menu":
        return <MenuCard />;
      case "Role":
        return <RoleCard />;
      case "User":
        return <UserCard />;
      default:
        return <OrdersCard />;
    }
  };

  return (
    <Box display="flex">
      {/* sidebar */}
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#FFEAD9", // Light beige background for sidebar
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Box>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <img
              src={EmojiPizza}
              alt="pizza"
              style={{ width: "40px", marginRight: "10px" }}
            />
            <Typography variant="h5" fontWeight="bold">
              PIZZA
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => setSelected("Orders")}
            >
              <NotesIcon sx={{ marginRight: "10px" }} />
              <Typography
                fontWeight="bold"
                color={selected === "Orders" ? "#FF5A1F" : "black"}
              >
                Orders
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => setSelected("Add Menu")}
            >
              <NotesIcon sx={{ marginRight: "10px" }} />
              <Typography
                fontWeight="bold"
                color={selected === "Add Menu" ? "#FF5A1F" : "black"}
              >
                Add Menu
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => setSelected("Role")}
            >
              <NotesIcon sx={{ marginRight: "10px" }} />
              <Typography
                fontWeight="bold"
                color={selected === "Role" ? "#FF5A1F" : "black"}
              >
                Role
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => setSelected("User")}
            >
              <NotesIcon sx={{ marginRight: "10px" }} />
              <Typography
                fontWeight="bold"
                color={selected === "User" ? "#FF5A1F" : "black"}
              >
                User
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box display="flex" alignItems="center" color="red" marginBottom="20px">
          <LogoutIcon sx={{ marginRight: "10px" }} />
          <Typography fontWeight="bold">Logout</Typography>
        </Box>
      </Box>

      {/* main content */}
      <Box sx={{ flex: 1, padding: "20px" }}>
        {/* top bar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
        >
          <Typography variant="h4">{selected}</Typography>
          <Box display="flex" alignItems="center">
            <IconButton>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Box>

        {/* dynamic content */}
        <Box>{renderContent()}</Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
