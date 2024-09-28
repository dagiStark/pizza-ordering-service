import { Box, Typography, Button } from "@mui/material";
import { PizzaDeliver } from "../assets";
import { useAuthContext } from "../context/AuthContext";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // For smooth scrolling
import useLogout from "../hooks/useLogout";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { authUser } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

  const [sectionToScroll, setSectionToScroll] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        top: 0,
        zIndex: 1000,
        borderRadius: "12px",
      }}
    >
      {/* Logo Section */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          top: 0,
          gap: "0.75rem",
        }}
      >
        <Box
          component="img"
          src={PizzaDeliver}
          alt="pizza logo"
          sx={{
            width: { xs: "50px", sm: "60px", md: "80px" },
            height: { xs: "50px", sm: "60px", md: "80px" },
            objectFit: "contain",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderTopRightRadius: "45%",
            borderBottomLeftRadius: "45%",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#FF890F",
            textTransform: "uppercase",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          HotWheel Pizzas
        </Typography>
      </Box>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 2 }}>
        {/* Home link */}
        <Typography
          sx={{
            margin: "0 1rem",
            cursor: "pointer",
            fontSize: "1.2rem", // Larger size
            color: activeLink === "home" ? "#FF8100" : "inherit", // Active state color
            fontWeight: activeLink === "home" ? "bold" : "normal", // Bold if active
          }}
          onClick={() => {
            handleScrollToSection("about");
            handleLinkClick("home"); // Set "home" as active
          }}
        >
          Home
        </Typography>

        {/* Orders link */}
        <Typography
          component={RouterLink}
          to={authUser ? "/orders" : "/sign-up"}
          sx={{
            margin: "0 1rem",
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "1.2rem", // Larger size
            color: activeLink === "orders" ? "#FF8100" : "inherit", // Active state color
            fontWeight: activeLink === "orders" ? "bold" : "normal", // Bold if active
          }}
          onClick={() => handleLinkClick("orders")}
        >
          Orders
        </Typography>

        {/* Who We Are link */}
        <Typography
          sx={{
            margin: "0 1rem",
            cursor: "pointer",
            fontSize: "1.2rem", // Larger size
            color: activeLink === "who-we-are" ? "#FF8100" : "inherit", // Active state color
            fontWeight: activeLink === "who-we-are" ? "bold" : "normal", // Bold if active
          }}
          onClick={() => {
            handleScrollToSection("who-we-are");
            handleLinkClick("who-we-are");
          }}
        >
          Who We Are
        </Typography>

        {/* Contact Us link */}
        <Typography
          sx={{
            margin: "0 1rem",
            cursor: "pointer",
            fontSize: "1.2rem", // Larger size
            color: activeLink === "contact-us" ? "#FF8100" : "inherit", // Active state color
            fontWeight: activeLink === "contact-us" ? "bold" : "normal", // Bold if active
          }}
          onClick={() => {
            handleScrollToSection("contact-us");
            handleLinkClick("contact-us");
          }}
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
              fontSize: "1.2rem", // Larger size
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          gap: "2rem",
        }}
      >
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
    </Box>
  );
};

export default NavBar;
