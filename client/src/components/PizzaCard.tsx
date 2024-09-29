import {
  Box,
  Typography,
  Button,
  Avatar,
  Link as LinkBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Image2, Ellipse } from "../assets";

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
        sx={{
          width: { xs: "160px", md: "220px" },
          height: { xs: "160px", md: "220px" },

          backgroundColor: "rgba(234, 129, 0, 0.20)",
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Box
          component="img"
          src={Image2}
          alt="Margherita"
          sx={{
            width: { xs: "150px", md: "210px" },
            height: { xs: "150px", md: "210px" },
            borderRadius: "50%",
            position: "relative",
          }}
        />
      </Box>

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
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            Margherita
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginBottom: "8px", textAlign: "left" }}
          >
            Tomato, Mozzarella, Bell Peppers, Onions, Olives
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
            paddingBottom: "15px",
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
              sx={{
                color: "green",
                fontWeight: "bold",
                fontSize: { md: "45px" },
              }}
            >
              150
            </Typography>
            <Typography variant="body1">Birr</Typography>
          </Box>

          <LinkBase
            component={Link}
            sx={{
              backgroundColor: "#FF8100",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "16px",
              marginTop: "16px",
              "&:hover": {
                backgroundColor: "#e0780c",
              },
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: { md: "30px" },
              textDecoration: "none",
            }}
            to="/make-order"
          >
            Order
          </LinkBase>
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
            src={Ellipse}
            sx={{ width: { xs: 40, md: 70 }, height: { xs: 40, md: 70 } }}
          />
          <Typography
            variant="body1"
            sx={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontSize: { md: "20px" },
            }}
          >
            Azmera Pizza
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PizzaCard;
