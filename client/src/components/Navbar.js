import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav>
            <h1>Zack is awesome</h1>
            <div>
                <div>
                    <p>NiteMode</p>
                </div>
                <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    )
}

export default Navbar