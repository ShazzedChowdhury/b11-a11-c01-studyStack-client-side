import axios from 'axios';
import React from 'react';

const useAxiosPublic = () => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_base_api,
    });
    return instance
};

export default useAxiosPublic;