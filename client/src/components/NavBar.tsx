import { Box, Typography, Button } from "@mui/material";
import { logo } from "../assets";

const NavBar = () => {
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
          src={logo}
          alt="pizza logo"
        />
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 2 }}>
        <Typography sx={{ margin: "0 1rem", cursor: "pointer" }}>
          Home
        </Typography>
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
