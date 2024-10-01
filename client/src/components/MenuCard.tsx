import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import useMenuCard from "../hooks/useMenuCard"; // Import the custom hook

const MenuCard = () => {
  const { addMenuItem, loading } = useMenuCard();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [toppings, setToppings] = useState([]);
  const [image, setImage] = useState(null);

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    setToppings((prev) =>
      checked ? [...prev, value] : prev.filter((topping) => topping !== value)
    );
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    const priceValue = parseFloat(price);
    addMenuItem({ name, price: priceValue, toppings, image });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Add Menu
      </Typography>

      <TextField
        fullWidth
        label="Name"
        type="text"
        margin="normal"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Topping</Typography>
        <Stack
          spacing={1}
          direction="row"
          sx={{ flexWrap: "wrap", gap: 1 }} // Add gap for spacing and enable wrapping
        >
          {["Mozzarella", "Tomato", "Bell Peppers", "Onions", "Olives"].map(
            (topping) => (
              <FormControlLabel
                key={topping}
                control={
                  <Checkbox value={topping} onChange={handleToppingChange} />
                }
                label={topping}
              />
            )
          )}
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <AddIcon sx={{ color: "#FF8100", marginRight: 1 }} />
          <Button variant="contained" sx={{ backgroundColor: "#FF8100" }}>
            Add
          </Button>
        </Box>
      </Box>

      <TextField
        fullWidth
        label="Price"
        type="text"
        margin="normal"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Button
        component="label"
        variant="outlined"
        sx={{
          borderColor: "#FF8100",
          color: "#FF8100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <UploadIcon sx={{ marginRight: 1 }} />
        Upload Pizza Photo
        <VisuallyHiddenInput type="file" onChange={handleImageChange} />
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF8100",
          "&:hover": {
            backgroundColor: "#FF8100", // Keep hover color same as the button
          },
        }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Adding..." : "Submit"}
      </Button>
    </Box>
  );
};

export default MenuCard;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
