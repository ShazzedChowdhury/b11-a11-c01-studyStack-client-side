import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../components/Loading/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();

   if(loading) {
    return <Loading />
   }

   if(!user) {
     return <Navigate to="/sign-in"></Navigate>
   }

   return children
};

export default PrivateRoute;