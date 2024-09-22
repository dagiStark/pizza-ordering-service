import { Box, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
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
