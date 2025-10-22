import React, { use } from 'react';
import { NotificationContext } from '../context/NotificationProvider';

const useNotification = () => {
    const data = use(NotificationContext)
    return data
};

export default useNotification;