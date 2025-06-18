import axios from 'axios';
import React, { use } from 'react';
import useAuth from './useAuth';
import { AuthContext } from '../context/AuthProvider';
import sweetMessage from '../Utils/sweetMessage';
import { useNavigate } from 'react-router';


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_base_api,
});
const useAxiosSecure = () => {
    const { user, setUser } = useAuth();
    const {logOutUser} = use(AuthContext)
    const navigate = useNavigate()
    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config
    }, (err) => {
        return Promise.reject(err)
    })


    axiosInstance.interceptors.response.use((response) => response, (error) => {
        
        if(error.status === 401) {
            logOutUser()
            .then(() => {
                sweetMessage("Your are logged out", "error")
                setUser(null)
            })
            .catch(err => {
                console.log(err)
            })
        }

        return Promise.reject(error)
    })
    return axiosInstance
};

export default useAxiosSecure;