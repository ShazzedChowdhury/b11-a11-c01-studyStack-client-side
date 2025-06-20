import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import './navbar.css'
import useAuth from '../../Hooks/useAuth';
import LoggedIn from '../LoggedIn';
import NotLoggedIn from '../NotLoggedIn';
import ThemeControler from '../ThemeControler';
import sweetMessage from '../../Utils/sweetMessage';
const Navbar = () => {
    const { user, logOutUser, setUser } = useAuth();


    const handleUserLogOut = () => {
      logOutUser()
        .then(() => {
          sweetMessage("logged out successfully", "success");
          setUser(null);
        })
        .catch((error) => {
          sweetMessage("Somethings went wrong. try again.");
        });
    };


    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/assignments">Assignments</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/pending-assignments">Pending Assignments</NavLink>
          </li>
        )}
        {!user && (
          <>
            <li>
              <NavLink to="/sign-in" className="block md:hidden">
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="block md:hidden">
                Register
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={handleUserLogOut} className="block md:hidden">
              Logout
            </button>
          </li>
        )}
      </>
    );
    return (
      <div className="navbar bg-base-100 shadow-sm px-5 py-5 md:px-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="flex gap-1 items-center">
            <img src={logo} className="w-10" alt="" />
            <h1 className="text-2xl">
              study<span className="font-bold text-primary">Stack</span>
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          <div>
            <ThemeControler />
          </div>
          {user ? (
            <LoggedIn handleUserLogOut={handleUserLogOut} />
          ) : (
            <NotLoggedIn />
          )}
        </div>
      </div>
    );
};

export default Navbar;