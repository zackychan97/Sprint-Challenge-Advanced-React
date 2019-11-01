import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

//try example from guided project --> come back to --> needs SASS --> dependencies and SASS watch compile

//version 2 - use material ui toggle --> this way doesn't work
// import CheckIcon from '@material-ui/icons/Check';
// import ToggleButton from '@material-ui/lab/ToggleButton';

//version 3 - try basic html and css toggle



const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div className="switch-modes">
          <p>Dark Mode</p>
        </div>
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
       
      </div>
    </nav>
  );
};
export default Navbar;