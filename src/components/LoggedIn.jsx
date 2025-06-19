import React, { useState } from 'react';
import UserProfile from './UserProfile/UserProfile';
import useAuth from '../Hooks/useAuth';
import sweetMessage from '../Utils/sweetMessage';

const LoggedIn = ({ handleUserLogOut }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <UserProfile
        onClick={() => setOpen((prev) => !prev)}
        isOpen={isOpen}
        handleUserLogOut={handleUserLogOut}
      />
      <button
        onClick={handleUserLogOut}
        className="btn btn-outline btn-primary hidden sm:block"
      >
        Logout
      </button>
    </>
  );
};

export default LoggedIn;