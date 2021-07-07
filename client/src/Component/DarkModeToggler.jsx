import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";
import { Switch, FormControlLabel } from "@material-ui/core";

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <FormControlLabel
        label="Dark Mode"
        className="dark-mode-container"
        control={
          <Switch
            color="secondary"
            checked={darkMode}
            onChange={toggleDarkMode}
            value="dark_mode"
          />
        }
      />
    </div>
  );
};

export default DarkModeToggler;