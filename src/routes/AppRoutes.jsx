import { Routes, Route } from "react-router-dom";
import Index from "../pages/index/Index";
import About from "../pages/index/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Index />} />
    </Routes>
  );
};

export default AppRoutes;
