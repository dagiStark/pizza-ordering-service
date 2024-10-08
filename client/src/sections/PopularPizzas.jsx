import { Box, Typography } from "@mui/material";
import PizzaCard from "../components/PizzaCard";

function PopularPizzas() {
  return (
    <section id="popular-pizzas">
      <Box
        sx={{
          display: "flex",
          padding: { xs: "5px", md: "65px 87px 110px 87px" },
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background: "#FFF8F1",
          overflow: "hidden",
          mt: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1266px",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Typography
            sx={{
              alignSelf: "stretch",
              color: "rgba(0, 0, 0, 0.50)",
              fontFamily: "Inter",
              fontSize: { xs: "30px", md: "50px" },

              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%", // 75px
              textAlign: "flex-start",
            }}
          >
            Popular pizzas
          </Typography>
          <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",

          }}
          >
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default PopularPizzas;
