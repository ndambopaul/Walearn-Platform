// ProtectedLayout.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedLayout = () => {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet /> 
    </div>
  );
};

export default ProtectedLayout;
