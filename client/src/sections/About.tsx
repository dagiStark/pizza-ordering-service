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
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2rem",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: { xs: "100%", md: "60%", lg: "40%" },
              gap: "20px",
              paddingLeft: { md: "60px" },
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
                width: { md: "648px" },
                height: { md: "90px" }, // Set height
                borderRadius: "50px",
                background: "#fff",
                paddingRight: "0px", // Prevents extra padding in the container
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
                        padding: { md: "20px" },
                        marginRight: { xs: "-6px", md: "-4px" },
                      }}
                    >
                      <SearchIcon sx={{ fontSize: { md: "30px" } }} />{" "}
                      {/* Adjust icon size if needed */}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "50px",
                  height: { md: "118px" }, // Ensures the input height matches
                  padding: "0 20px", // Aligns text and icon inside
                },
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              zIndex: { md: 1 },
              right: { md: "22%" },
              top: { md: 5 },
              rotate: "-150deg",
              width: { xs: "10px" },
            }}
          >
            <img src={Image1} alt="pizza leaf" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: { md: "28%" },
              bottom: { md: 10, xs: 1 },
              zIndex: { xs: -1, md: 0 },
              width: { xs: "10px" },
            }}
          >
            <img src={Image1} alt="pizza leaf" />
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "block" },
              width: { xs: "100%", md: "40%" },
              textAlign: { xs: "center", md: "left" },
              paddingTop: { xs: "1rem", md: "0" },
              overflow: "hidden",
              position: { lg: "absolute" },
              right: { lg: -300 },
              transform: { lg: "scale(1.2)" },
              transformOrigin: { lg: "center" },
            }}
          >
            <img
              src={Image2}
              alt="circle pizza"
              style={{
                transformOrigin: "center", // Keeps the scaling centered
                width: "100%", // Ensure it scales based on the container's width
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
