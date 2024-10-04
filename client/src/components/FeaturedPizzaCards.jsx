import { Box, Typography, Button } from "@mui/material";
import {  vippng1, Image4, Image5 } from "../assets";

const FirstCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3E3E3E",
        borderRadius: { xs: "15px", md: "35px" },
        paddingLeft: { xs: "1rem", md: "4rem" },
        paddingTop: { xs: "1rem" },
        margin: { xs: "0.4rem 0", md: "1rem 0" },
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "flex-start", md: "left" },
          marginBottom: { xs: "1rem", md: "0" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: { xs: "0.1rem", md: "0.5rem" },
            fontSize: { xs: "15px", md: "40px" },
          }}
        >
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography
          sx={{
            color: "#ccc",
            mb: { xs: "1rem", md: "1.5rem" },
            fontSize: { xs: "5px", md: "20px" },
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
            fontWeight: "bold",
            padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
            fontSize: { xs: "10px", md: "25px" },
          }}
        >
          Order Now
        </Button>
      </Box>

      {/* Right Section (Pizza Image) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "flex-end", md: "flex-end" },
          transform: { xs: "scale(1.4)", md: "scale(1.1)" },
          paddingRight: { xs: "-20px", md: "20px" },
        }}
      >
        <img
          src={vippng1}
          alt="Pizza"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
          }}
        />
      </Box>
    </Box>
  );
};

const SecondCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3E3E3E",
        borderRadius: { xs: "15px", md: "35px" },

        paddingLeft: { xs: "1rem", md: "4rem" },
        paddingTop: { xs: "1rem" },
        margin: { xs: "0.4rem 0", md: "1rem 0" },
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "flex-start", md: "left" },
          marginBottom: { xs: "1rem", md: "0" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: { xs: "0.1rem", md: "0.5rem" },
            fontSize: { xs: "15px", md: "40px" },
          }}
        >
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography
          sx={{
            color: "#ccc",
            mb: { xs: "1rem", md: "1.5rem" },
            fontSize: { xs: "5px", md: "20px" },
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
            fontWeight: "bold",
            padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
            fontSize: { xs: "10px", md: "25px" },
          }}
        >
          Order Now
        </Button>
      </Box>

      {/* Right Section (Pizza Image) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "flex-end", md: "flex-end" },
          transform: { xs: "scale(1.4)", md: "scale(1.1)" },
          paddingRight: { xs: "-20px", md: "20px" },
        }}
      >
        <img
          src={Image4}
          alt="Pizza"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
            // maxHeight: { xs: "200px", md: "300px" },
            // width: { xs: "80%", md: "50%" },
          }}
        />
      </Box>
    </Box>
  );
};

const ThirdCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3E3E3E",
        borderRadius: { xs: "15px", md: "35px" },

        paddingLeft: { xs: "1rem", md: "4rem" },
        paddingTop: { xs: "1rem" },
        margin: { xs: "0.4rem 0", md: "1rem 0" },
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "flex-start", md: "left" },
          marginBottom: { xs: "1rem", md: "0" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: { xs: "0.1rem", md: "0.5rem" },
            fontSize: { xs: "15px", md: "40px" },
          }}
        >
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography
          sx={{
            color: "#ccc",
            mb: { xs: "1rem", md: "1.5rem" },
            fontSize: { xs: "5px", md: "20px" },
          }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF8100",
            color: "#fff",
            fontWeight: "bold",
            padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
            fontSize: { xs: "10px", md: "25px" },
          }}
        >
          Order Now
        </Button>
      </Box>

      {/* Right Section (Pizza Image) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "flex-end", md: "flex-end" },
          transform: { xs: "scale(1.4)", md: "scale(1.1)" },
          paddingRight: { xs: "-20px", md: "20px" },
        }}
      >
        <img
          src={Image5}
          alt="Pizza"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
          }}
        />
      </Box>
    </Box>
  );
};

export { FirstCard, SecondCard, ThirdCard };
