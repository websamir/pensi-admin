import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import storage from '../storage/storage'
import { jwtDecode } from 'jwt-decode';
import { showAlert, sendRequest } from '../functions';

export const ProtectedRoutes = ({ children }) => {

  const location = useLocation();

  const logout = async () => {
    await sendRequest('POST', {}, '/api/logout-user', '', true, false);
    storage.remove('authToken');
    storage.remove('authUser');
    showAlert('Sesión vencida...', 'warning', 5000, '/admin-jc/login');
  };

  const useAuth = () => {
    const user = storage.get('authUser'); // O el método que uses para verificar la autenticación
    return user ? true : false;
  };

  useEffect(() => {
    const checkToken = () => {
      const authToken = storage.get('authToken');
      if (authToken) {
        const decodedToken = jwtDecode(authToken);
        const now = Math.floor(Date.now() / 1000);

        if ((decodedToken.exp < now)) {
          storage.remove('authToken');
          storage.remove('authUser');
          <Navigate to="/admin-jc/login" />
        }else if((decodedToken.exp - now) < 666) {
          logout();


        }
      }
    };

    checkToken();

    return () => { };
  }, [location]);


  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/admin-jc/login" />;
 

}

export default ProtectedRoutes