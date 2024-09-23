import { Box, Typography, Button, Avatar } from "@mui/material";
import { Image2 } from "../assets";

const PizzaCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        backgroundColor: "#fff",
        textAlign: "center",
        width: "250px",
      }}
    >
      <Box
        component="img"
        src={Image2}
        alt="Margherita"
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Margherita
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: "8px" }}
          >
            Tomato, Mozzarella, Bell Peppers, Onions, Olives
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "green", fontWeight: "bold" }}
            >
              150
            </Typography>
            <Typography variant="body1">Birr</Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF8100",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "16px",
              marginTop: "16px",
              "&:hover": {
                backgroundColor: "#e0780c",
              },
            }}
          >
            Order
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Avatar
            alt="Azmera Pizza"
            src="https://example.com/avatar.jpg"
            sx={{ width: 40, height: 40 }}
          />
          <Typography
            variant="body1"
            sx={{ marginLeft: "8px", fontWeight: "bold" }}
          >
            Azmera Pizza
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaCard;
