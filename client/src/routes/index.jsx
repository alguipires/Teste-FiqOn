import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { apiToken } = useContext(AuthContext);

  console.log('token api,,,,', apiToken);

  return apiToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
