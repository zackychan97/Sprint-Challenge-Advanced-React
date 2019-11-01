import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";

export default function Toggle() {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return(
        <div>
            <label class="switch">
                <input
                type="checkbox"
                selected={darkMode ? 'toggle toggled' : 'toggle'}
                onChange={() => {
                    setDarkMode(!toggleMode);
                }} />
                <span class="slider round"></span>
            </label>
        </div>
    )
}









