import { Box, Typography, Button, Link as LinkBase } from "@mui/material";
import { Logo } from "../assets";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { authUser } = useAuthContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // space between logo and other items
        alignItems: "center",
        padding: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo Section */}
      <Box sx={{ flexGrow: 1 }}>
        <img
          style={{ maxWidth: "150px", height: "auto" }} // max width for responsiveness
          src={Logo}
          alt="pizza logo"
        />
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 2 }}>
        <Typography sx={{ margin: "0 1rem", cursor: "pointer" }}>
          Home
        </Typography>
        <LinkBase
          component={Link}
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
          }}
          to={authUser ? "/orders" : "sign-up"}
        >
          Orders
        </LinkBase>
        <Typography sx={{ margin: "0 1rem", cursor: "pointer" }}>
          Who We Are
        </Typography>
        <Typography sx={{ margin: "0 1rem", cursor: "pointer" }}>
          Contact Us
        </Typography>
      </Box>

      {/* Register Button */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            padding: "10px 30px",
            borderRadius: "5px",
            background: "#FF890F",
          }}
          onClick={() => {
            alert("clicked");
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
