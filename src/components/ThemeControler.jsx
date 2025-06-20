import React, { use } from 'react';
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from '../context/ThemeProvider';

const ThemeControler = () => {
    const { theme, setTheme } = use(ThemeContext)
    
    const handleToggle = e => {
        
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
            <FaMoon size={25} />
        ) : (
          <LuSun size={25} />
        )}
      </label>
    );
};

export default ThemeControler;