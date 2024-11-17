// import React, { Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// const Index = React.lazy(() => import("../pages/index/Index"));
// const Register = React.lazy(() => import("../pages/dashboard/register/Index"));

// const AppRoutes = () => {
//   return (
//     <Suspense>
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<Index />} />
//       </Routes>
//     </Suspense>
//   );
// };

import "./route.css";
import React, { useEffect, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Index = React.lazy(() => import("../pages/index/Index"));
const Register = React.lazy(() => import("../pages/dashboard/register/Index"));

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulasi loading, ganti dengan logika loading yang sesuai

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Suspense>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Suspense>
      {loading && (
        <div className="overlay-loading">
          <div className="loading-spinner">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default AppRoutes;
