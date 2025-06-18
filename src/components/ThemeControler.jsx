import React, { use } from 'react';
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from '../context/ThemeProvider';

const ThemeControler = () => {
    const { theme, setTheme } = use(ThemeContext)
    console.log(theme)
    const handleToggle = e => {
        console.log(e.target.checked);
        if(e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

   
    return (
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleToggle}
          className="theme-controller"
        />

        {theme === "light" ? (
          <div className='rounded-full btn btn-primary h-fit p-1'>
            <FaMoon size={25} />
          </div>
        ) : (
        <div className='rounded-full btn btn-primary h-fit p-1'>
          <LuSun size={25} />
        </div>
        )}
      </label>
    );
};

export default ThemeControler;