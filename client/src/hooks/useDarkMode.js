import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        //when Navbar is set to true (or darkMode) then activate darkMode styling
        if (darkMode === true) {
            return document.querySelector('body').classList.add('dark-mode');
        } else {
            return document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}