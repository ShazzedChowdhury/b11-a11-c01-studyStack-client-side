import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const useMySubmittedAssignmentApi = () => {
    const axiosSecure = useAxiosSecure();
    const mySubmittedAssignmentPromise = (email) => {
      return axiosSecure.get(`/my-submitted-assignment/${email}`).then(res => res.data)
    }
    return {
        mySubmittedAssignmentPromise
    }
};

export default useMySubmittedAssignmentApi;