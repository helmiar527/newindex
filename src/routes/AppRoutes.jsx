// Import environment variables
import "./route.css";
import React, { useState, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  useDebugError,
  startPeriodicErrorLogging,
} from "../services/err/debugError";
import useTokenStore from "../services/token/tokenStore";
import useErrorStore from "../services/err/errorStore";

// Import halaman
const Index = React.lazy(() => import("../pages/index/Index"));
const Register = React.lazy(() => import("../pages/dashboard/register/Index"));

// Komponen AppRoutes
const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [tokenInitialized, setTokenInitialized] = useState(false);
  const { initializeToken, isValid, error } = useTokenStore();

  // Inisialisasi debug error (selalu aktif)
  // useEffect(() => {
  //   const unsubscribe = useDebugError(true);
  //   const intervalId = startPeriodicErrorLogging(1000); // Log setiap 1 detik

  //   return () => {
  //     // Cleanup pada unmount
  //     if (unsubscribe) unsubscribe();
  //     if (intervalId) clearInterval(intervalId);
  //   };
  // }, []);

  // Inisialisasi token
  useEffect(() => {
    const initToken = async () => {
      try {
        // Inisialisasi token ke store
        await initializeToken();
        setTokenInitialized(true);
      } catch (error) {
        // Kirim error ke state error management
        useErrorStore
          .getState()
          .addError("token_route_service", "Failed to initialize token");
        setTokenInitialized(true);
      } finally {
        // Set loading to false setelah inisialisasi token selesai (berhasil atau gagal)
        setLoading(false);
      }
    };

    // Jalan fungsi inisialisasi token
    initToken();
  }, [initializeToken]);

  // Fungsi untuk menampilkan loading spinner
  const handleLoadComplete = (isComplete) => {
    setLoading(isComplete);
  };

  // Tampilkan loading spinner selama token belum diinisialisasi
  if (!tokenInitialized || loading) {
    return (
      <div className="overlay-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route
            path="/"
            element={<Index onLoadComplete={handleLoadComplete} />}
          />
          <Route
            path="/register"
            element={<Register onLoadComplete={handleLoadComplete} />}
          />
          {/* <Route
            path="*"
            element={<Index onLoadComplete={handleLoadComplete} />}
          /> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
