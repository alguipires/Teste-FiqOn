// authContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [apiToken, setApiToken] = useState(null);

  useEffect(() => {
    // Verificar se o api_token existe na sessão do navegador ao montar o componente
    const storedApiToken = sessionStorage.getItem('api_token');
    console.log('Logg.... storedApiToken....', storedApiToken);
    if (storedApiToken) {
      setApiToken(storedApiToken);
    }
  }, []);

  const login = (token) => {
    setApiToken(token);
    sessionStorage.setItem('api_token', token);
  };

  const logout = () => {
    setApiToken(null);
    sessionStorage.removeItem('api_token');
  };

  return (
    <AuthContext.Provider value={{ apiToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default { AuthProvider, AuthContext };
