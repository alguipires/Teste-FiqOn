import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from '.';
import Login from '../pages/Login/Login';
import Listar from '../pages/Listar/Listar';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/listar" element={<PrivateRoutes />}>
          <Route path="/listar" element={<Listar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
