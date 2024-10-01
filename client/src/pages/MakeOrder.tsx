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
import { Image2, Image6 } from "../assets";
import useOrder from "../hooks/useOrder";

const pizzaImages = [
  { src: Image2, name: "Margherita" },
  { src: Image6, name: "Pepperoni" },
];

const MakeOrder = () => {
  const [selectedPizza, setSelectedPizza] = useState(pizzaImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(150);
  const [toppings, setToppings] = useState({
    mozzarella: true,
    tomato: true,
    bellPeppers: true,
    onions: false,
    olives: false,
  });

  const { order } = useOrder(); // Use the order hook
  const user = localStorage.getItem("user");
  const customerNo = user ? JSON.parse(user).phoneNo : null;

  if (!customerNo) {
    console.error("Customer number is not available.");
  }

  const handleImageClick = (image) => {
    setSelectedPizza(image);
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleToppingChange = (event) => {
    const { name, checked } = event.target;
    setToppings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleOrder = () => {
    const selectedToppings = Object.entries(toppings)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    order({
      name: selectedPizza.name,
      toppings: selectedToppings,
      quantity,
      customerNo,
    });
  };

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
          alignItems: "flex-start",
          gap: "30px",
        }}
      >
        {/* Main Pizza Image with Background Circle */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 165, 0, 0.40)",
            borderRadius: "50%",
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={selectedPizza.src}
            alt={selectedPizza.name}
            sx={{
              width: { xs: "250px", md: "350px" },
              height: "auto",
              borderRadius: "50%",
              transition: "transform 0.3s ease",
              transform: "scale(1.2)",
            }}
          />
        </Box>

        {/* Pizza Thumbnails with Background Circle */}
        <Stack direction="column" spacing={4}>
          {pizzaImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "rgba(255, 165, 0, 0.40)",
                borderRadius: "50%",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.name}
                onClick={() => handleImageClick(image)}
                sx={{
                  width: "100px", // Thumbnail size
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "50%",
                  border:
                    selectedPizza.name === image.name
                      ? "2px solid orange"
                      : "none",
                  transition: "transform 0.3s ease",
                  transform: "scale(1.1)",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Pizza Details */}
      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
        <Stack spacing={2}>
          <Typography variant="h1" fontWeight={"bold"}>
            {selectedPizza.name}
          </Typography>

          {/* Ingredients */}
          <Stack direction="row" spacing={1} justifyContent="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={toppings.mozzarella}
                  onChange={handleToppingChange}
                  name="mozzarella"
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
                  checked={toppings.tomato}
                  onChange={handleToppingChange}
                  name="tomato"
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
                  checked={toppings.bellPeppers}
                  onChange={handleToppingChange}
                  name="bellPeppers"
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
                  checked={toppings.onions}
                  onChange={handleToppingChange}
                  name="onions"
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
                  checked={toppings.olives}
                  onChange={handleToppingChange}
                  name="olives"
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
              sx={{
                borderColor: "#FF8100",
                width: "48px",
                height: "48px",
                border: "2px solid #FF8100",
              }}
            >
              <RemoveIcon fontSize="large" />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {quantity}
            </Typography>
            <IconButton
              onClick={handleIncrease}
              sx={{
                width: "48px",
                height: "48px",
                border: "2px solid #FF8100",
              }}
            >
              <AddIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h4"
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
            onClick={handleOrder} // Call handleOrder on button click
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
