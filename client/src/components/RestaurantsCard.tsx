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
        padding: "28px",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "100%",
        width: "700px", // Default width for larger screens
        transition: "0.3s ease", // Transition for shrinking on mobile
        "@media (max-width: 768px)": {
          flexDirection: "column", // Column layout on mobile
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
            src={Ellipse} // Change to appropriate image path
            alt="Azmera Pizza"
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
            }}
          />
          {/* Restaurant Info */}
          <Typography
            sx={{
              fontSize: "18px",
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
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
              maxWidth: "300px", // Limit text width
              "@media (max-width: 768px)": {
                textAlign: "center", // Center text on mobile
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
          padding: "16px",
          borderRadius: "12px",
          "@media (max-width: 768px)": {
            justifyContent: "center", // Center the icon and text on mobile
          },
        }}
      >
        <ShoppingBagIcon
          sx={{
            fontSize: "40px",
            color: "#FF8100",
            marginRight: "12px",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
              "@media (max-width: 768px)": {
                textAlign: "center", // Center text on mobile
              },
            }}
          >
            Number of orders
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#FF8100",
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
