import { Box, Typography, Button } from "@mui/material";
import { Image2 } from "../assets";

const FirstCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3E3E3E",
        borderRadius: "15px",
        padding: "1.5rem",
        margin: "1rem 0",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "1.5rem", md: "0" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography sx={{ color: "#ccc", mb: "1.5rem" }}>
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
            padding: "0.75rem 1.5rem",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
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
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <img
          src={Image2}
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

const SecondCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#50482B",
        borderRadius: "15px",
        padding: "1.5rem",
        margin: "1rem 0",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "1.5rem", md: "0" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography sx={{ color: "#ccc", mb: "1.5rem" }}>
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
            padding: "0.75rem 1.5rem",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
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
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <img
          src={Image2}
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
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#296D60",
        borderRadius: "15px",
        padding: "1.5rem",
        margin: "1rem 0",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "1.5rem", md: "0" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: "0.5rem" }}>
          Make Your First Order <br /> and Get{" "}
          <span style={{ color: "#FF8100" }}>50% Off</span>
        </Typography>
        <Typography sx={{ color: "#ccc", mb: "1.5rem" }}>
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
            padding: "0.75rem 1.5rem",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#E67600",
            },
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
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <img
          src={Image2}
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

export { FirstCard, SecondCard, ThirdCard };
