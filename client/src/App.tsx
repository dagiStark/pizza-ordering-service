import { Box } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-up"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <LogIn />}
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
