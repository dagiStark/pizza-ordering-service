import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import {
  FirstCard,
  SecondCard,
  ThirdCard,
} from "../components/FeaturedPizzaCards";

function FeaturedPizza() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [<FirstCard />, <SecondCard />, <ThirdCard />];

  // React-spring transition
  const transitions = useTransition(currentIndex, {
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" }, // Start outside (right)
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" }, // Move to center
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }, // Move to left
    config: { mass: 1, tension: 280, friction: 30 }, // Smooth animation config
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [components.length]);

  // Dots component for navigation indication
  const renderDots = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
          overflow: "hidden",
        }}
      >
        {components.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#FF8100" : "#E0E0E0",
              margin: { xs: "0 10px", md: "0 10px" },
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <section id="featured-pizza">
      <Box
        sx={{
          display: "flex",
          padding: { xs: "5px", md: "65px 87px 110px 87px" },
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background: "#FFF8F1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1266px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Typography
            sx={{
              alignSelf: "stretch",
              color: "rgba(0, 0, 0, 0.50)",
              fontFamily: "Inter",
              fontSize: { xs: "30px", md: "50px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%", // 75px
            }}
          >
            Featured pizza
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "170px", md: "420px" }, // Adjust height as per content
              overflow: "hidden",
            }}
          >
            {transitions((style, index) => (
              <animated.div
                style={{ ...style, position: "absolute", width: "100%" }}
              >
                {components[index]}
              </animated.div>
            ))}
          </Box>

          {/* Rendered dots below the animated cards */}
          {renderDots()}
        </Box>
      </Box>
    </section>
  );
}

export default FeaturedPizza;
