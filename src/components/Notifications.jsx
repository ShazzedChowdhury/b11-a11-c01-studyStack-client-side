import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useNotification from "../Hooks/useNotification";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, setRefetch } = useNotification();
  const axiosPublic = useAxiosPublic();

  //   const unreadNotification = notifications.filter((n) => !n.isRead);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)} className="relative">
      <FiBell className="text-2xl cursor-pointer" />
      {notifications.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
          {notifications.length}
        </span>
      )}

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-base-100 shadow-lg rounded-md w-64 p-2 z-100">
          <h3 className="font-semibold mb-2">Notifications</h3>
          {notifications.length === 0 ? (
            <p className="py-4 text-center text-sm">Empty</p>
          ) : (
            <ul>
              {notifications.slice(0, 5).map((notification) => (
                <li
                  key={notification?._id}
                  className="py-3 px-2 border-b border-b-gray-900 last:border-none"
                >
                  <Link
                    onClick={async () => {
                      await axiosPublic.patch(
                        `/notifications/${notification?._id}`
                      );
                      setRefetch((prev) => !prev);
                    }}
                    to={`/assignment/${notification?.assignmentId}`}
                    className="text-sm underline"
                  >
                    {notification.message}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
