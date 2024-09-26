import { Box, Stack } from "@mui/material";
import {
  About,
  FeaturedPizza,
  TopRestaurants,
  PopularPizzas,
  Fasting,
  ContactUs,
} from "../sections";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <Box>
      <Stack>
        <NavBar />
        <About />
        <FeaturedPizza />
        <TopRestaurants />
        <PopularPizzas />
        <Fasting />
        <ContactUs />
      </Stack>
    </Box>
  );
};

export default Home;
