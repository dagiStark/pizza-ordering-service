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

const MenuCard = () => {
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
      />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Topping</Typography>
        <Stack
          spacing={1}
          direction="row"
          sx={{ flexWrap: "wrap", gap: 1 }} // Add gap for spacing and enable wrapping
        >
          <FormControlLabel control={<Checkbox />} label="Mozzarella" />
          <FormControlLabel control={<Checkbox />} label="Tomato" />
          <FormControlLabel control={<Checkbox />} label="Bell Peppers" />
          <FormControlLabel control={<Checkbox />} label="Onions" />
          <FormControlLabel control={<Checkbox />} label="Olives" />
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
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF8100",
          "&:hover": {
            backgroundColor: "#FF8100", // Keep hover color same as the button
          },
        }}
      >
        Submit
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
