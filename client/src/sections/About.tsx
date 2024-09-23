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
      </Box>
    </Box>
  );
}

export default About;
