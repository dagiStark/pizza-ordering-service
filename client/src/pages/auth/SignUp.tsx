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
import { EmojiPizza } from "../../assets";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [restaurantId, setRestaurantId] = useState(1);
  
  const { signUp, loading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(
      fullName,
      email,
      password,
      confirmPassword,
      location,
      phoneNo,
      restaurantId
    );
  };

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
          <form action="" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              value={fullName} // Bind email to state
              onChange={(e) => setFullName(e.target.value)} // Update state on change
              required
            />
            <TextField
              fullWidth
              label="Email address"
              type="email"
              margin="normal"
              value={email} // Bind email to state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password} // Bind email to state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              value={confirmPassword} // Bind email to state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
              required
            />
            <TextField
              fullWidth
              label="Location"
              margin="normal"
              value={location} // Bind email to state
              onChange={(e) => setLocation(e.target.value)} // Update state on change
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              margin="normal"
              value={phoneNo} // Bind email to state
              onChange={(e) => setPhoneNo(e.target.value)} // Update state on change
              required
            />

            {/* Terms and Conditions */}
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the Terms and Conditions"
              required
            />

            {/* SignUp Button */}
            <Button
              type="submit"
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
              disabled={loading}
            >
              {loading ? "Signing up.." : "Sign Up"}
            </Button>
          </form>

          {/* Login Option */}
          <Box
            sx={{
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/login" sx={{ color: "#FF8100" }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
