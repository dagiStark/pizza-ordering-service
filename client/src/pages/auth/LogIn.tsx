import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import PizzaIcon from "@mui/icons-material/LocalPizza";
import { Logo, EmojiPizza } from "../../assets";

const LogIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FF8100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={EmojiPizza}
          alt="Pizza"
          sx={{
            width: "300px",
            height: "auto",
          }}
        />
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <PizzaIcon sx={{ fontSize: "40px", color: "#FF8100" }} />
            <Typography
              variant="h4"
              sx={{
                color: "#FF8100",
                fontWeight: 700,
                marginLeft: "8px",
              }}
            >
              Pizza
            </Typography>
          </Box>

          {/* Form */}
          <TextField
            fullWidth
            label="Email address"
            type="email"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />

          {/* keep logging */}
          <FormControlLabel control={<Checkbox />} label="Remember me" />

          {/* LogIn Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FF8100",
              color: "#FFF",
              padding: "12px",
              marginTop: "16px",
              "&:hover": {
                backgroundColor: "#e0780c",
              },
            }}
          >
            Log In
          </Button>

          {/* SignUp Option */}
          <Box
            sx={{
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/sign-up" sx={{ color: "#FF8100" }}>
                SignUp
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
