import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
 const authData = use(AuthContext)
 return authData
};

export default useAuth;