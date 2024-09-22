import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../components/NavBar";
import { Image1, Image2 } from "../assets";

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
      <Box
        sx={{
          width: "214px",
          height: "239px",
          transform: "rotate(176.733deg)",
          flexShrink: 0,
          background: `url(${Image1})) lightgray -582.102px -168.096px / 504.246% 297.365% no-repeat`,
        }}
      />
      <Box
        sx={{
          width: "1440px",
          height: "75px",
          flexShrink: 0,
          boxShadow: "0px 0px 15px 0px rgba(255, 129, 0, 0.20)",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          width: "794px",
          height: "400px",
          paddingBottom: "0px",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "794px",
            height: "400px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: "794px",
              height: "806px",
              transform: "rotate(-150deg)",
              flexShrink: 0,
              background: `url(${Image2}) lightgray -155.215px -119.285px / 125.693% 123.797% no-repeat`,
            }}
          />
        </Box>
      </Box>

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
            sx={{
              fontFamily: "Inter",
              fontSize: "150px",
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
              width: "766px",
              color: "#050505",
              fontFamily: "Roboto",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "144.687%", // 36.172px
              letterSpacing: "0.75px",
              opacity: 0.9,
            }}
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "748px",
            height: "118px",
            filter: "drop-shadow(0px 5px 50px rgba(0, 0, 0, 0.15))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center the TextField horizontally
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            sx={{
              height: "118px",
              flexShrink: 0,
              borderRadius: "100px",
              background: "var(--Main-Color-White, #FFF)",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent", // Remove default border
                },
                "&:hover fieldset": {
                  borderColor: "transparent", // Remove border on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent", // Remove border when focused
                },
              },
            }}
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#FF890F" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "214px",
          height: "239px",
          transform: "rotate(30deg)",
          flexShrink: 0,
          background:
            "url(<path-to-image>) lightgray -780.74px -210.435px / 504.246% 297.365% no-repeat",
        }}
      />
    </Box>
  );
}

export default About;
