import { Box, Typography, Button } from "@mui/material";

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
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1266px",
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
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%", // 75px
            }}
          >
            Top Restaurants
          </Typography>

          <Box>to add animates component here</Box>
        </Box>
      </Box>
    </section>
  );
}

export default TopRestaurants;
