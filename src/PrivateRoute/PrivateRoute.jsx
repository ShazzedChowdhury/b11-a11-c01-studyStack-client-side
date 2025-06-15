import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();

   if(!user) {
    return <Loading />
   }
};

export default PrivateRoute;