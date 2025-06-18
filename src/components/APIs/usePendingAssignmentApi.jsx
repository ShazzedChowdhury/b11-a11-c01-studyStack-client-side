import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const usePendingAssignmentApi = () => {
    const axiosSecure = useAxiosSecure();

    const PendingAssignmentPromise = (status) => {
        return axiosSecure.get(`/pending-assignment?status=${status}`).then(res => res?.data)
    }
    return {
        PendingAssignmentPromise
    }
};

export default usePendingAssignmentApi;