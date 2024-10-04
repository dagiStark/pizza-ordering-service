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
  import useRegister from "../../hooks/useRegister";
  
  const Register = () => {
    const [name, setName] = useState(""); // Name of the restaurant
    const [location, setLocation] = useState(""); // Location of the restaurant
    const [superAdmin, setSuperAdmin] = useState(""); // Super Admin Name
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
  
    const { register, loading } = useRegister();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await register({
        name,
        location,
        superAdmin,
        email,
        password,
        confirmPassword,
        phoneNo,
      });
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
                HotWheel Pizzas
              </Typography>
            </Box>
  
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Restaurant Name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Location"
                margin="normal"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Super Admin Name"
                margin="normal"
                value={superAdmin}
                onChange={(e) => setSuperAdmin(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Email address"
                type="email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                margin="normal"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
  
              {/* Terms and Conditions */}
              <FormControlLabel
                control={<Checkbox required />}
                label="I accept the Terms and Conditions"
              />
  
              {/* Register Button */}
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
                {loading ? "Registering..." : "Register"}
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
  
  export default Register;
  