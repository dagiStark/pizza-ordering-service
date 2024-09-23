import { Box, Typography, Button } from "@mui/material";

function TopRestaurants() {
  return (
    <Box
      sx={{
        display: "flex",
        paddingBottom: "150px",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF8F1",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(250, 126, 0, 0.00) 0%, rgba(250, 126, 0, 0.20) 60.5%, rgba(148, 74, 0, 0.00) 100%)",
          display: "flex",
          width: "1440px",
          padding: "94px 48px 94px 47px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          alignSelf: "stretch",
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
      </Box>
    </Box>
  );
}

export default TopRestaurants;
