import "./Header.css"

import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import { ReactComponent as SunIcon } from "../../assets/img/icons/sun-icon.svg";
import { ReactComponent as MoonIcon } from "../../assets/img/icons/moon-icon.svg";

import Button from "../utils/Button/Button";
import { useState } from "react";


const Header = () => {
    const [theme, setTheme] = useState("dark");
    const [language, setLanguage] = useState("en");




    return <header className="header">
        <div className="container">
            <LogoIcon className="logo-icon" />
            {/*<span className="text">LuisZapataDev</span>*/}

            <nav className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li><Button to='/blog/' text="Blog" w="12rem" h="3.5rem" /></li>
                    <li><Button to="/learning/" text="Learning" w="12rem" h="3.5rem" /></li>
                </ul>
            </nav>

            <div className="settings">
                <div className="icon-theme">
                    {theme == "dark" ? <SunIcon /> : <MoonIcon />}
                </div>
                <span className="language">{language == "en" ? "EN" : "ES"}</span>
            </div>
        </div>
    </header>
}

export default Header