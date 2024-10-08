import { Box, Typography } from "@mui/material";
import OrderedPizzaCard from "../components/OrderedPizzaCard";

function Orders() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "65px 87px 110px 87px",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background: "#FFF8F1",
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
            Order History
          </Typography>

          <OrderedPizzaCard />
        </Box>
      </Box>
    </>
  );
}

export default Orders;
