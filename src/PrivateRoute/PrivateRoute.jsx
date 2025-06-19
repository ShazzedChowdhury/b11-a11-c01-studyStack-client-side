import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();

   if(loading) {
    return <Loading />
   }

   if(!user) {
     return <Navigate state={location?.pathname} to="/sign-in"></Navigate>
   }

   return children
};

export default PrivateRoute;