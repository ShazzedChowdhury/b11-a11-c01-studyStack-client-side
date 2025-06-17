import axios from 'axios';
import React from 'react';

const mySubmittedAssignmentPromise = (email) => {
    return axios(`${import.meta.env.VITE_base_api}/my-submitted-assignment/${email}`).then(res => res.data)
};

export default mySubmittedAssignmentPromise;