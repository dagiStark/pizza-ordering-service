import { Box, Typography } from "@mui/material";
import RestaurantsCard from "../components/RestaurantsCard";

function TopRestaurants() {
  return (
    <section id="top-restaurants">
      <Box
        sx={{
          display: "flex",
          padding: "65px 87px 110px 87px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background:
            "linear-gradient(180deg, rgba(250, 126, 0, 0.00) 0%, rgba(250, 126, 0, 0.20) 60.5%, rgba(148, 74, 0, 0.00) 100%)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "25px",
          }}
        >
          <Typography
            sx={{
              alignSelf: "stretch",
              color: "rgba(0, 0, 0, 0.50)",
              fontFamily: "Inter",
              fontSize: { xs: "40px", md: "50px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%", // 75px
            }}
          >
            Top Restaurants
          </Typography>

          <Box
            sx={{
              overflow: "hidden", // Hide overflow for smooth scrolling
              width: "100%", // Ensure it takes up the full width
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                animation: "scroll 15s linear infinite", // Smooth scrolling animation
                "@keyframes scroll": {
                  "0%": { transform: "translateX(100%)" },
                  "100%": { transform: "translateX(-100%)" },
                },
              }}
            >
              {/* Duplicate the cards for smooth continuous scrolling */}
              <RestaurantsCard />
              <RestaurantsCard />
              <RestaurantsCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default TopRestaurants;
