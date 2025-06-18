import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_base_api,
});
const useAxiosSecure = () => {
    const { user } = useAuth();
    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config
    }, (err) => {
        return Promise.reject(err)
    })
    return axiosInstance
};

export default useAxiosSecure;