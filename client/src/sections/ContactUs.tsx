import { Box, Typography, Button } from "@mui/material";

function ContactUs() {
  return (
    <section id="contact-us">
      <Box
        sx={{
          background: "#CCB691",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "20px" }}>Contact Information</Typography>
        </Box>
        <Box
          sx={{
            background: "#000",
            color: "#fff",
            width: "100%",
          }}
        >
          all rights reserved
        </Box>
      </Box>
    </section>
  );
}

export default ContactUs;
