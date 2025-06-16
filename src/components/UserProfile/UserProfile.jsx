import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const UserProfile = ({ onClick, isOpen, handleUserLogOut }) => {
    const { user } = useAuth();
  return (
    <>
      <div onClick={onClick} className="avatar">
        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>

      {isOpen && (
        <ul className="p-2 bg-base-100 rounded-sm absolute top-20 right-5 md:right-20 shadow-sm">
          <li>
            <NavLink to="/create-assignment" className="p-1 rounded-sm text-sm block">
              Create Assignments
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-assignments" className="p-1 rounded-sm text-sm block">
              My Attempted Assignments
            </NavLink>
          </li>
          <li>
            <button onClick={handleUserLogOut} className="font-semibold p-1 rounded-sm text-sm">
              Logout
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default UserProfile;