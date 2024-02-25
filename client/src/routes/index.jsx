import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getSavedUser } from '../utils/sessionStorageLogin';

const PrivateRoutes = () => {
  // const { apiToken } = useContext(AuthContext);
  const apiToken = getSavedUser('api_token');

  return apiToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
