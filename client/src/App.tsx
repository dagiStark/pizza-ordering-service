import { Box } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";

function App() {
  const { authUser } = useAuthContext();
  const location = useLocation();
  const hiddenNavRoutes = ["/dashboard", "/sign-up", "/login", "/register", ""];

  const shouldShowNavbar = !hiddenNavRoutes.includes(location.pathname);

  return (
    <>
      <Box>
        {shouldShowNavbar && <NavBar />}
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
          <Route
            path="/dashboard"
            element={
              authUser &&
              (authUser.role !== "customer" ? (
                <Dashboard />
              ) : (
                <Navigate to={"/"} />
              ))
            }
          />
          <Route
            path="/orders"
            element={authUser ? <Orders /> : <Navigate to={"/sign-up"} />}
          />
          <Route
            path="/make-order"
            element={authUser ? <Orders /> : <Navigate to={"/sign-up"} />}
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
