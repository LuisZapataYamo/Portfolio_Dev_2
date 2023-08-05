import "./Header.css"

import {ReactComponent as LogoIcon} from "../../assets/img/logo.svg";
import {ReactComponent as SunIcon} from "../../assets/img/icons/sun-icon.svg";
import {ReactComponent as MoonIcon} from "../../assets/img/icons/moon-icon.svg";

import Button from "../utils/Button/Button";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";
import commons from "../../utils/locales/common.json";

const Header = () => {
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);

    const handleThemeChange = () => {
        const varTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(varTheme);
    };

    const handleLanguageChange = () => {
        const varLanguage = language === 'ES' ? 'EN' : 'ES';
        setLanguage(varLanguage);
    }

    useEffect(() => {
        const header = commons["header"]
    }, [theme, language])

    return <header className={`header ${theme}`}>
        <div className="container">
            <LogoIcon className="logo-icon"/>
            {/*<span className="text">LuisZapataDev</span>*/}

            <nav className="navbar">
                <ul>
                    <li className="inav">{header.home[language]}</li>
                    <li className="inav">{header.about[language]}</li>
                    <li className="inav">{header.skills[language]}</li>
                    <li className="inav">{header.experience[language]}</li>
                    <li><Button to='/blog/' text={`${header.blog[language]}`} w="12rem" h="3.5rem"/></li>
                    <li><Button to="/learning/" text={`${header.learning[language]}`} w="12rem" h="3.5rem"/></li>
                </ul>
            </nav>

            <div className="settings">
                <div className="icon-theme">
                    {theme === "dark" ? <SunIcon onClick={handleThemeChange}/> :
                        <MoonIcon onClick={handleThemeChange}/>}
                </div>
                <span className="language" onClick={handleLanguageChange}>{language}</span>
            </div>
        </div>
    </header>
}

export default Header