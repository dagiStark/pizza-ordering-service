import { Box, Typography, Avatar } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Ellipse } from "../assets";

function RestaurantsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: {xs: "10px",md: "28px"},
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "100%",
        minWidth: {xs: "300px", md: "500px" },
        transition: "0.3s ease", // Transition for shrinking on mobile
        "@media (max-width: 900px)": {
          alignItems: "center", // Center content on mobile
          gap: "16px", // Add some spacing between elements on mobile
          width: "100%", // Full width on mobile
        },
      }}
    >
      {/* Profile and Restaurant Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          "@media (max-width: 768px)": {
            alignItems: "center", // Center align the text and image on mobile
          },
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          <Avatar
            src={Ellipse}
            alt="Azmera Pizza"
            sx={{
              width: { xs: 25, md: 50 },
              height: { xs: 25, md: 50 },
              borderRadius: "50%",
            }}
          />
          {/* Restaurant Info */}
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "18px" },
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Azmera Pizza
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "7px", md: "14px" },
              color: "rgba(0, 0, 0, 0.5)",
              maxWidth: { md: "300px" }, // Limit text width
              "@media (max-width: 768px)": {
                textAlign: "flex-start", // Center text on mobile
              },
            }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to...
          </Typography>
        </Box>
      </Box>

      {/* Order Count */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0FAF6",
          padding: {xs: "8px",md: "16px"},
          borderRadius: "12px",
          "@media (max-width: 768px)": {
            justifyContent: "center", // Center the icon and text on mobile
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "40px", md: "80px" },
            height: { xs: "40px", md: "80px" },

            backgroundColor: "rgba(234, 129, 0, 0.20)",
            borderRadius: "50%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <ShoppingBagIcon
            sx={{
              fontSize: { md: "60px" },
              color: "#FF8100",
              position: "relative",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "10px" },
              color: "rgba(0, 0, 0, 0.6)",
              whiteSpace: "nowrap", // Prevent text from breaking into multiple lines
              "@media (max-width: 768px)": {
                textAlign: "center", // Center text on mobile
              },
            }}
          >
            Number of orders
          </Typography>
          <Typography
            sx={{
              fontSize: { xs:"30px", md: "60px" },
              fontWeight: "bold",
              color: "#FF8100",
              whiteSpace: "nowrap", // Prevent "2K" from breaking
              "@media (max-width: 768px)": {
                textAlign: "center", // Center text on mobile
              },
            }}
          >
            2K
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RestaurantsCard;
