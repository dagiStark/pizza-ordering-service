import { Box, Typography } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
