import { Box, Typography, Button } from "@mui/material";
import { Logo } from "../assets";
import { useAuthContext } from "../context/AuthContext";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // For smooth scrolling
import useLogout from "../hooks/useLogout";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { authUser } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const [sectionToScroll, setSectionToScroll] = useState(null);
  const { logout } = useLogout();

  useEffect(() => {
    if (sectionToScroll && location.pathname === "/") {
      scroller.scrollTo(sectionToScroll, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
      setSectionToScroll(null);
    }
  }, [location.pathname, sectionToScroll]);

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      setSectionToScroll(sectionId);
      navigate("/");
    } else {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

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
        {/* Home link */}
        <Typography
          sx={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => handleScrollToSection("about")}
        >
          Home
        </Typography>

        {/* Orders link */}
        <Box
          component={RouterLink}
          to={authUser ? "/orders" : "/sign-up"}
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
            margin: "0 1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Orders
        </Box>

        {/* Who We Are - Smooth Scroll */}
        <Typography
          sx={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => handleScrollToSection("who-we-are")}
        >
          Who We Are
        </Typography>

        {/* Contact Us - Smooth Scroll */}
        <Typography
          sx={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => handleScrollToSection("contact-us")}
        >
          Contact Us
        </Typography>

        {/* Dashboard link (for non-customers only) */}
        {authUser && authUser.role !== "customer" && (
          <Box
            component={RouterLink}
            to="/dashboard"
            sx={{
              backgroundColor: "#FF8100",
              color: "#fff",
              margin: "0 1rem",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Dashboard
          </Box>
        )}
      </Box>

      {!authUser ? (
        <Box
          component={RouterLink}
          to={"/login"}
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
            margin: "0 1rem",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          logIn
        </Box>
      ) : (
        <Button
          variant="contained"
          sx={{
            padding: "10px 30px",
            borderRadius: "5px",
            background: "#FF890F",
          }}
          onClick={logout}
        >
          logout
        </Button>
      )}

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
