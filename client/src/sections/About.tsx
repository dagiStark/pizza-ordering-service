import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../components/NavBar";
import { Pizza, Image1 } from "../assets";

function About() {
  return (
    <Box
      sx={{
        height: "937px",
        alignSelf: "stretch",
        background:
          "linear-gradient(180deg, #FFF 0%, #FFC993 76%, #FFF8F1 100%)",
      }}
    >
      <NavBar />
      <Box
        component="img"
        src={Image1}
        alt="Styled Sample"
        sx={{
          width: "214px", // Set the width
          height: "239px", // Set the height
          transform: "rotate(176.733deg)", // Rotate the image
          flexShrink: 0, // Prevent shrinking
          background: `url(${Image1}) lightgray -582.102px -168.096px / 504.246% 297.365% no-repeat`,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "766px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "150px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
                background:
                  "linear-gradient(90deg, #FF8100 -2.97%, #FFBE71 93.66%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Order us
            </Typography>
            <Typography
              sx={{
                color: "#050505",
                fontFamily: "Roboto, sans-serif",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "144.687%",
                letterSpacing: "0.75px",
                opacity: 0.9,
              }}
            >
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without.
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search"
            sx={{
              borderRadius: "50px",
              background: "#fff",
              width: "748px",
              height: "118px",
              filter: "drop-shadow(0px 5px 50px rgba(0, 0, 0, 0.15))",
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
        <Box>
          <img src={Pizza} alt="circle pizza" />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
