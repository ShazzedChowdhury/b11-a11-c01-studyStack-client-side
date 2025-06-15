import React, { useState } from 'react';
import UserProfile from './UserProfile/UserProfile';
import useAuth from '../Hooks/useAuth';
import sweetMessage from '../Utils/sweetMessage';

const LoggedIn = () => {
    const { logOutUser, setUser } = useAuth()
    const [ isOpen, setOpen ] = useState(false)
    console.log(isOpen)
    const handleUserLogOut = () => {
        logOutUser()
        .then(() => {
            sweetMessage("logged out successfully", "success")
            setUser(null)
        }).catch(error => {
            sweetMessage("Somethings went wrong. try again.")
        })
    }
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
}

export default LoggedIn;