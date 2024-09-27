import { Box, Stack } from "@mui/material";
import {
  About,
  FeaturedPizza,
  TopRestaurants,
  PopularPizzas,
  Fasting,
  ContactUs,
} from "../sections";

const Home = () => {
  return (
    <Box>
      <Stack>
        <About />
        <FeaturedPizza />
        <TopRestaurants />
        <PopularPizzas />
        <Fasting />
        <section id="contact-us">
          <ContactUs />
        </section>
      </Stack>
    </Box>
  );
};

export default Home;
