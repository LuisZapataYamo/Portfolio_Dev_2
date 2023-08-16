import "./ItemExperience.css"

import {experience} from "../../../utils/locales/common.json";

import Valhalla from "../../../assets/img/enterprises/valhalla.jpg";

import {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalStateContext.jsx";

const enterpriseLogos = {
    "Valhalla": Valhalla
}

const ItemExperience = ({
                            titleJob = "",
                            enterprise = "",
                            initTime = "",
                            lastTime = "",
                            description = "",
                            listSkills = [],
                            linkEnterprise = ""
                        }) => {
    const {theme, language} = useContext(GlobalContext);

    return <div className={`job ${theme}`}>
        <div className="content-job">
            <h2 className="title-job">
                <span className="title">{titleJob}</span> {experience.general.in[language]} <span className="enterprise"><a href={linkEnterprise} target="_blank" rel="noopener">{enterprise}</a></span></h2>
            <div className="timelapse">
                <span className="init">{initTime}</span>
                <span className="hyphen"> - </span>
                <span className="last">{lastTime}</span>
            </div>
            <p className="description">{description}</p>
            <div className="skills">
                <span className="title">{experience.general.skills[language]}:</span>
                <ul className="list">
                    {listSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
        <figure className="logo"><a href={linkEnterprise} target="_blank" rel="noopener"><img src={enterpriseLogos[enterprise]} alt={enterprise}/></a></figure>
    </div>
}

export default ItemExperience