import React, { createContext, useEffect, useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const NotificationContext = createContext();
const NotificationProvider = ({children}) => {
      const [notifications, setNotifications] = useState([]);
      const [refetch, setRefetch] = useState(false)
      const axiosPublic = useAxiosPublic();
    
      useEffect(() => {
        axiosPublic.get("/notifications").then((res) => {
          setNotifications(res.data);
        });
      }, [refetch]);

      const notificationData = {
        notifications,
        setRefetch
      }
    return (
       <NotificationContext value={notificationData}>
        {children}
       </NotificationContext>
    );
};

export default NotificationProvider;