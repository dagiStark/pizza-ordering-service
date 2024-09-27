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
    <Box>
      <Box>
        <Typography>Add Menu</Typography>
        <TextField fullWidth label="Name" type="text" margin="normal" />

        <Box>
          <Typography>Topping</Typography>
          <Stack>
            <FormControlLabel control={<Checkbox />} label="Mozzarella" />
            <FormControlLabel control={<Checkbox />} label="Tomato" />
            <FormControlLabel control={<Checkbox />} label="Bell Peppers" />
            <FormControlLabel control={<Checkbox />} label="Onions" />
            <FormControlLabel control={<Checkbox />} label="Olives" />
          </Stack>
          <Box>
            <AddIcon />
            <Button variant="contained">Add</Button>
          </Box>
        </Box>
        <TextField fullWidth label="Price" type="text" margin="normal" />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<UploadIcon />}
        >
          Upload Pizza Photo
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
        <Button variant="contained">Submit</Button>
      </Box>
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
