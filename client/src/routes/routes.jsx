import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from '.';
import Login from '../pages/Login/Login';
import List from '../pages/List/List';
import Page404 from '../pages/Page_404/404';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route path="/listar" element={<PrivateRoutes />}>
          <Route path="/listar" element={<List />} />
        </Route>

        {/*Rota coringa para redirecionar para a rota principal */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
