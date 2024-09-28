import { Box, Typography, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { EmojiPizza } from "../assets";

function ContactUs() {
  return (
    <section id="contact-us">
      {/* Top Contact Section */}
      <Box
        sx={{
          background: "#CCB691",
          padding: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for larger screens
            gap: { xs: "20px", md: "0" }, // Add spacing between elements for mobile
          }}
        >
          {/* Left: Navigation Links */}
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              flexDirection: { xs: "column", md: "row" }, // Stack links in column on mobile
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Order
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000",
                cursor: "pointer",
              }}
            >
              About Us
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" }, // Column for mobile, row for larger screens
              gap: "40px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Right: Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={EmojiPizza} // replace with your pizza logo image
                alt="Pizza Logo"
                style={{ width: "40px" }}
              />
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#FF8100",
                }}
              >
                Pizza
              </Typography>
            </Box>

            {/* Center: Feedback Input */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: "30px",
                padding: "4px 15px",
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
                maxWidth: "400px",
              }}
            >
              <TextField
                placeholder="Your feedback..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  width: "100%", // Take full width
                  marginRight: "10px",
                  color: "#999",
                }}
              />
              <IconButton>
                <SendIcon sx={{ color: "#FF8100" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Footer Section */}
      <Box
        sx={{
          background: "#000",
          color: "#fff",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" }, // Center content on mobile
            flexDirection: { xs: "column", md: "row" }, // Column layout on mobile
            alignItems: "center",
            gap: { xs: "10px", md: "0" }, // Add spacing between elements on mobile
          }}
        >
          {/* Left: Copyright Text */}
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            ©2024 Pizza All Rights Reserved.
          </Typography>

          {/* Center: Terms and Conditions */}
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Terms & Conditions
          </Typography>

          {/* Right: Social Media Icons */}
          <Box sx={{ display: "flex", gap: "10px" }}>
            <FacebookIcon
              sx={{
                color: "#fff",
                width: { md: "50px" },
                height: { md: "50px" },
              }}
            />
            <LinkedInIcon sx={{ color: "#fff", width: { md: "50px" },
                height: { md: "50px" }, }} />
            <TwitterIcon sx={{ color: "#fff", width: { md: "50px" },
                height: { md: "50px" }, }} />
            <YouTubeIcon sx={{ color: "#fff", width: { md: "50px" },
                height: { md: "50px" }, }} />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default ContactUs;
