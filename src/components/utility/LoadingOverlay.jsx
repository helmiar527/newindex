import React from "react";
import "../../assets/css/utility/LoadingOverlay.css";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Loading, mohon tunggu...</p>
    </div>
  );
};

export default LoadingOverlay;
