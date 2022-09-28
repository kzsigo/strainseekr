import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user && !user.DispensaryID) {
    return <Navigate to="/dispensary/login" replace />;
  }
  return children;
};

export default Protected;
