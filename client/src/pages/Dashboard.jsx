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
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import GradingIcon from "@mui/icons-material/Grading";

import PersonIcon from "@mui/icons-material/Person";
import { EmojiPizza } from "../assets";
import OrdersCard from "../components/OrdersCard";
import MenuCard from "../components/MenuCard";
import RoleCard from "../components/RoleCard";
import UserCard from "../components/UserCard";
import { useState } from "react";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState("Orders");
  const { logout } = useLogout();
  const navigate = useNavigate();

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
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Box display="flex">
      {/* sidebar */}
      <Box
        sx={{
          width: "250px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          gap: "50px",
        }}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            marginBottom="20px"
            justifyContent={"space-between"}
          >
            <Typography variant="h5" fontWeight="bold">
              PIZZA
            </Typography>
            <NotesIcon sx={{ marginRight: "10px" }} />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            marginBottom="20px"
            justifyContent={"center"}
            sx={{
              backgroundColor: "#FFEA", // Light beige background for Pizza
              minHeight: "100px",
            }}
          >
            <img
              src={EmojiPizza}
              alt="pizza"
              style={{ width: "60px", marginRight: "10px" }}
            />
          </Box>

          <Stack spacing={1} display={"flex"} flexDirection={"column"}>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
                background:
                  selected === "Orders"
                    ? "rgba(255, 129, 0, 0.40)"
                    : "transparent",
                minHeight: "40px",
                paddingLeft: "20%",
              }}
              onClick={() => setSelected("Orders")}
            >
              <GradingIcon
                sx={{
                  marginRight: "10px",
                  color:
                    selected === "Orders" ? "#FF8100" : "rgba(0, 0, 0, 0.75)",
                }}
              />
              <Typography
                fontWeight="bold"
                color={
                  selected === "Orders" ? "#FF8100" : "rgba(0, 0, 0, 0.75)"
                }
              >
                Orders
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
                background:
                  selected === "Add Menu"
                    ? "rgba(255, 129, 0, 0.40)"
                    : "transparent",
                minHeight: "40px",
                paddingLeft: "20%",
              }}
              onClick={() => setSelected("Add Menu")}
            >
              <LocalPizzaIcon
                sx={{
                  marginRight: "10px",
                  rotate: "35deg",
                  color:
                    selected === "Add Menu" ? "#FF8100" : "rgba(0, 0, 0, 0.75)",
                }}
              />
              <Typography
                fontWeight="bold"
                color={
                  selected === "Add Menu" ? "#FF8100" : "rgba(0, 0, 0, 0.75)"
                }
              >
                Add Menu
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
                background:
                  selected === "Role"
                    ? "rgba(255, 129, 0, 0.40)"
                    : "transparent",
                minHeight: "40px",
                paddingLeft: "20%",
              }}
              onClick={() => setSelected("Role")}
            >
              <PersonIcon
                sx={{
                  marginRight: "10px",
                  color:
                    selected === "Role" ? "#FF8100" : "rgba(0, 0, 0, 0.75)",
                }}
              />
              <Typography
                fontWeight="bold"
                color={selected === "Role" ? "#FF8100" : "rgba(0, 0, 0, 0.75)"}
              >
                Role
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
                background:
                  selected === "User"
                    ? "rgba(255, 129, 0, 0.40)"
                    : "transparent",
                minHeight: "40px",
                paddingLeft: "20%",
              }}
              onClick={() => setSelected("User")}
            >
              <AccountCircleIcon
                sx={{
                  marginRight: "10px",
                  color:
                    selected === "User" ? "#FF8100" : "rgba(0, 0, 0, 0.75)",
                }}
              />
              <Typography
                fontWeight="bold"
                color={selected === "User" ? "#FF8100" : "rgba(0, 0, 0, 0.75)"}
              >
                User
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          color="red"
          marginBottom="20px"
          sx={{
            alignSelf: "center",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          <LogoutIcon sx={{ marginRight: "10px" }} />
          <Typography fontWeight="bold">Logout</Typography>
        </Box>
      </Box>

      {/* main content */}

      <Box sx={{ flex: 1, padding: "20px", background: "#F8F8F8" }}>
        {/* top bar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
          sx={{
            background: "#FFFFFF",
            padding: "6px",
            borderRadius: "7px",
          }}
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
