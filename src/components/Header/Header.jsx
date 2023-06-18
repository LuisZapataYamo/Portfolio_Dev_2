import "./Header.css"

import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";
import { ReactComponent as SunIcon } from "../../assets/img/icons/sun-icon.svg";

import Button from "../utils/Button/Button";


const Header = () => {
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
                <SunIcon className="icon-theme"></SunIcon>
                <span className="language">EN</span>
            </div>
        </div>
    </header>
}

export default Header