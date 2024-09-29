import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Image2, Image4, Image5 } from "../assets";

const pizzaImages = [
  { src: Image2, name: "Margherita" },
  { src: Image4, name: "Pepperoni" },
];

const MakeOrder = () => {
  const [selectedPizza, setSelectedPizza] = useState(pizzaImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(150);

  const handleImageClick = (image) => {
    setSelectedPizza(image);
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        gap: "60px",
      }}
    >
      {/* Pizza Image and Thumbnails */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // Align items at the start
          gap: "30px", // Add gap between the main image and thumbnails
        }}
      >
        {/* Main Pizza Image */}
        <Box
          component="img"
          src={selectedPizza.src}
          alt={selectedPizza.name}
          sx={{
            width: { xs: "250px", md: "350px" }, // Increase size
            height: "auto",
            borderRadius: "50%",
            transition: "transform 0.3s ease",
            transform: "scale(1.2)", // Scale up the main image
          }}
        />

        {/* Pizza Thumbnails */}
        <Stack direction="column" spacing={4}>
          {pizzaImages.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.src}
              alt={image.name}
              onClick={() => handleImageClick(image)}
              sx={{
                width: "100px", // Increase thumbnail size
                height: "auto",
                cursor: "pointer",
                borderRadius: "50%",
                border:
                  selectedPizza.name === image.name
                    ? "2px solid orange"
                    : "none",
                transition: "transform 0.3s ease",
                transform: "scale(1.1)", // Scale up thumbnails slightly
                "&:hover": {
                  transform: "scale(1.2)", // Slightly enlarge on hover
                },
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Pizza Details */}
      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
        {" "}
        {/* Center align text */}
        <Stack spacing={2}>
          <Typography variant="h1" fontWeight={"bold"}>
            {selectedPizza.name}
          </Typography>

          {/* Ingredients */}
          <Stack direction="row" spacing={1} justifyContent="center">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#FF8100",
                    "&.Mui-checked": { color: "#FF8100" },
                  }}
                />
              }
              label="Mozzarella"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#FF8100",
                    "&.Mui-checked": { color: "#FF8100" },
                  }}
                />
              }
              label="Tomato"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#FF8100",
                    "&.Mui-checked": { color: "#FF8100" },
                  }}
                />
              }
              label="Bell Peppers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#FF8100",
                    "&.Mui-checked": { color: "#FF8100" },
                  }}
                />
              }
              label="Onions"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#FF8100",
                    "&.Mui-checked": { color: "#FF8100" },
                  }}
                />
              }
              label="Olives"
            />
          </Stack>

          {/* Quantity & Price */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              onClick={handleDecrease}
              sx={{ borderColor: "#FF8100" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
            <Typography
              variant="h5"
              sx={{ color: "#01C550", fontWeight: "bold" }}
            >
              {price * quantity} Birr
            </Typography>
          </Stack>

          {/* Order Button */}
          <Button
            variant="contained"
            color="warning"
            size="large"
            endIcon={<AddIcon />}
            sx={{ width: "fit-content", display: "flex" }} // Center the button
          >
            Order
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default MakeOrder;
