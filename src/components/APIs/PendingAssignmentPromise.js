import axios from 'axios';
import React from 'react';

const PendingAssignmentPromise = (status) => {
   return axios(`${import.meta.env.VITE_base_api}/pending-assignment?status=${status}`).then(res => res.data)
};

export default PendingAssignmentPromise;