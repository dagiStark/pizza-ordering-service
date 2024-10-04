import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Toaster />
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
