import { Box, Typography } from "@mui/material";
import Home from "./pages/Home";
import './App.css'
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

function App() {
  return (
    <>
      <Box
      >
        {/* <Home/> */}
        {/* <SignUp /> */}
        <LogIn />
      </Box>
    </>
  );
}

export default App;
