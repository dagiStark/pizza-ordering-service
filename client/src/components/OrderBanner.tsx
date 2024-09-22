import { Box, Typography, Button } from "@mui/material";
import { vippng1 } from "../assets";

function OrderBanner() {
  return (
    <Box
      sx={{
        width: "1266px",
        height: "386px",
      }}
    >
      <Box
        sx={{
          width: "1266px",
          height: "386px",
          flexShrink: 0,
          borderRadius: "40px",
          background: "#2F2F2F",
        }}
      />
      <Box
        sx={{
          width: "703.935px",
          height: "386px",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: "703.935px",
            height: "386px",
            flexShrink: 0,
            bOrderBannerRadius: "40px",
            background: "#D9D9D9",
          }}
        />
        <Box
          sx={{
            width: "657.241px",
            height: "484.356px",
            flexShrink: 0,
            background: `url(${vippng1}) lightgray 50% / cover no-repeat`,
          }}
        />
      </Box>

      <Typography
        sx={{
          width: "581.742px",
          color: "#FFF",
          fontFamily: "Roboto",
          fontSize: "45px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "95.688%", // 43.059px
          letterSpacing: "1.35px",
        }}
      >
        Make Your First Order and Get
      </Typography>
      <Typography
        sx={{
          width: "207.5px",
          color: "#FF9921",
          fontFamily: "Roboto",
          fontSize: "45px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "95.688%", // 43.059px
          letterSpacing: "1.35px",
        }}
      >
        50% Off
      </Typography>
      <Typography
        sx={{
          width: "590.388px",
          height: "61px",
          flexShrink: 0,
          color: "#FFF",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "144.687%", // 23.15px
          letterSpacing: "0.48px",
          opacity: 0.9,
        }}
      >
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without.
      </Typography>

      <Button
        sx={{
          width: "248.26px",
          height: "60px",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            width: "149.45px",
            color: "#FFF",
            fontFamily: "Roboto",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "144.687%", // 34.725px
            letterSpacing: "0.72px",
          }}
        >
          Order Now
        </Typography>
      </Button>
    </Box>
  );
}

export default OrderBanner;
