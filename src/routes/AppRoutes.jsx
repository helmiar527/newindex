// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Index from "../pages/index/Index";
// import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
      {/* <Route path="app" element={<App />} /> */}
    </Routes>
  );
};

export default AppRoutes;
