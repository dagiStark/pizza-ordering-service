import { Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import { PizzaDeliver } from "../assets";
import { useAuthContext } from "../context/AuthContext";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import useLogout from "../hooks/useLogout";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon

const NavBar = () => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

  const [sectionToScroll, setSectionToScroll] = useState(null);
  const [activeLink, setActiveLink] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the Drawer

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setDrawerOpen(false); // Close drawer when a link is clicked
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

      {/* Hamburger Menu Icon for Mobile */}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { xs: "flex", md: "none" }, color: "#FF890F" }}
      >
        <MenuIcon />
      </IconButton>

      {/* Navigation Links for Desktop */}
      <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center",alignItems: "center", flexGrow: 2 }}>
          {/* Home link */}
          <Typography
            sx={{
              margin: "0 1rem",
              cursor: "pointer",
              fontSize: "1.3rem",
              color: activeLink === "home" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "home" ? "bold" : "normal",
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
              fontSize: "1.3rem",
              color: activeLink === "orders" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "orders" ? "bold" : "normal",
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
              fontSize: "1.3rem",
              color: activeLink === "who-we-are" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "who-we-are" ? "bold" : "normal",
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
              fontSize: "1.3rem",
              color: activeLink === "contact-us" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "contact-us" ? "bold" : "normal",
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
                fontSize: "1.3rem",
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
                padding: "0.6rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67600",
                },
              }}
            >
              Log In
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{
                padding: "10px 30px",
                borderRadius: "50px",
                background: "#FF890F",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67A0F",
                },
              }}
              onClick={logout}
            >
              Log Out
            </Button>
          )}

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "10px 30px",
                borderRadius: "50px",
                background: "#FF890F",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67A0F",
                },
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

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            padding: "1rem",
            backgroundColor: "#f7f6f5",
          }}
        >
          {/* List of Navigation Links */}
          <Typography
            sx={{
              margin: "0.5rem 0",
              cursor: "pointer",
              color: activeLink === "home" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "home" ? "bold" : "normal",
            }}
            onClick={() => {
              handleScrollToSection("about");
              handleLinkClick("home");
            }}
          >
            Home
          </Typography>
          <Typography
            component={RouterLink}
            to={authUser ? "/orders" : "/sign-up"}
            sx={{
              margin: "0.5rem 0",
              cursor: "pointer",
              textDecoration: "none",
              color: activeLink === "orders" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "orders" ? "bold" : "normal",
            }}
            onClick={() => handleLinkClick("orders")}
          >
            Orders
          </Typography>
          <Typography
            sx={{
              margin: "0.5rem 0",
              cursor: "pointer",
              color: activeLink === "who-we-are" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "who-we-are" ? "bold" : "normal",
            }}
            onClick={() => {
              handleScrollToSection("who-we-are");
              handleLinkClick("who-we-are");
            }}
          >
            Who We Are
          </Typography>
          <Typography
            sx={{
              margin: "0.5rem 0",
              cursor: "pointer",
              color: activeLink === "contact-us" ? "#FF8100" : "inherit",
              fontWeight: activeLink === "contact-us" ? "bold" : "normal",
            }}
            onClick={() => {
              handleScrollToSection("contact-us");
              handleLinkClick("contact-us");
            }}
          >
            Contact Us
          </Typography>
          {authUser && authUser.role !== "customer" && (
            <Box
              component={RouterLink}
              to="/dashboard"
              sx={{
                backgroundColor: "#FF8100",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "pointer",
                marginTop: "0.5rem",
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
            flexDirection: "column"
          }}
        >
          {!authUser ? (
            <Box
              component={RouterLink}
              to={"/login"}
              sx={{
                backgroundColor: "#FF8100",
                color: "#fff",
                padding: "0.6rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67600",
                },
              }}
            >
              Log In
            </Box>
          ) : (
            <Button
              variant="contained"
              sx={{
                padding: "10px 30px",
                borderRadius: "50px",
                background: "#FF890F",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67A0F",
                },
              }}
              onClick={logout}
            >
              Log Out
            </Button>
          )}

          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "10px 30px",
                borderRadius: "50px",
                background: "#FF890F",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E67A0F",
                },
              }}
              onClick={() => {
                alert("clicked");
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
