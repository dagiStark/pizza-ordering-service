import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Image1, Image2 } from "../assets";

function About() {
  return (
    <section id="about">
      <Box
        sx={{
          alignSelf: "stretch",
          background:
            "linear-gradient(180deg, #FFF 0%, #FFC993 76%, #FFF8F1 100%)",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" }, // Stack on mobile, flex on larger screens
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: { xs: "100%", md: "60%" }, // Full width on mobile, 60% on larger screens
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "50px", md: "150px" }, // Responsive font size
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%", // 225px
                background:
                  "linear-gradient(90deg, #FF8100 -2.97%, #FFBE71 93.66%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Order us
            </Typography>

            <Typography
              sx={{
                color: "#050505",
                fontFamily: "Roboto",
                fontSize: { xs: "16px", md: "25px" }, // Responsive font size
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "144.687%", // 36.172px
                letterSpacing: "0.75px",
                opacity: 0.9,
                marginBottom: "50px",
              }}
            >
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without.
            </Typography>

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search"
              sx={{
                borderRadius: "50px",
                background: "#fff",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        backgroundColor: "#FF890F",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#e0780c",
                        },
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "50px",
                  paddingRight: "10px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "block" }, // Show on all devices
              width: { xs: "100%", md: "40%" }, // Full width on mobile, 40% on larger screens
              textAlign: { xs: "center", md: "left" }, // Center text on mobile, left align on larger screens
              paddingTop: { xs: "1rem", md: "0" }, // Add padding on top for mobile
              overflow: "hidden"
            }}
          >
            <img
              src={Image2}
              alt="circle pizza"
              style={{
                width: "80%", // Set to 80% of the container width
                height: "auto",
                maxHeight: "300px", // Set a maximum height
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
