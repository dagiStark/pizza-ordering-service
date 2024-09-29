import { Box, Typography, Button } from "@mui/material";
import PizzaCard from "../components/PizzaCard";

function PopularPizzas() {
  return (
    <section id="popular-pizzas">
      <Box
        sx={{
          display: "flex",
          padding: "65px 87px 110px 87px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background: "#FFF8F1",
          overflow: "hidden",
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
              fontSize: { xs: "40px", md: "50px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%", // 75px
            }}
          >
            Popular pizzas
          </Typography>

          <PizzaCard />
        </Box>
      </Box>
    </section>
  );
}

export default PopularPizzas;
