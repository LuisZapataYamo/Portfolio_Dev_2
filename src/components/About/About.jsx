import "./About.css"

import {about} from "../../utils/locales/common.json";
import {ReactComponent as Quality} from "../../assets/img/text/Quality.svg"
import {ReactComponent as Developer} from "../../assets/img/text/Developer.svg"
import {ReactComponent as Software} from "../../assets/img/text/Software.svg"
import Perfil from "../../assets/img/text/perfil.png"
import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";

const About = () => {
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);

    return <div className={`container-about ${theme}`}>
        <div className="content">
            <h1>{about.title[language]}</h1>
            <p>{about.description[language]}</p>
            <div className="personal-data"><span className="label">{about.email[language]}:</span><span className="text">jhonayquerdev@gmail.com</span></div>
            <div className="personal-data"><span className="label">{about.place[language]}:</span><span className="text">Lima, Peru</span></div>
        </div>
        <div className="perfil">
            <img src={Perfil} alt=""/>
            <figure className="quality"><Quality/></figure>
            <figure className="developer"><Developer/></figure>
            <figure className="software"><Software/></figure>
        </div>
    </div>
}

export default About