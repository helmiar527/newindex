// Import environment variables
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";

// Create root render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap AppRoutes with HelmetProvider */}
    <HelmetProvider>
      {/* Wrap AppRoutes with Router */}
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
