import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const MenuCard = () => {
  return (
    <Box>
      <Box>
        <Typography>Menu</Typography>
        <TextField
          fullWidth
          label="Email address"
          type="email"
          margin="normal"
        />

        <Box>
          <Typography>Topping</Typography>
          <Stack>
            <FormControlLabel control={<Checkbox />} label="Mozzarella" />
            <FormControlLabel control={<Checkbox />} label="Tomato" />
            <FormControlLabel control={<Checkbox />} label="Bell Peppers" />
            <FormControlLabel control={<Checkbox />} label="Onions" />
            <FormControlLabel control={<Checkbox />} label="Olives" />
          </Stack>
        </Box>
        <TextField
          fullWidth
          label="Email address"
          type="email"
          margin="normal"
        />
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Box>
    </Box>
  );
};

export default MenuCard;
