
import {experience} from "../../../utils/locales/common.json";

import Valhalla from  "../../../assets/img/enterprises/valhalla.jpg";

import {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalStateContext.jsx";

const enterpriseLogos = {
    "Valhalla": Valhalla
}

const ItemExperience = ({
                            enterprise = "",
                            initTime = "",
                            lastTime = "",
                            description = "",
                            listSkills = [],
                            image = null
                        }) => {
    const {theme, language} = useContext(GlobalContext);

    return <div className={`job ${theme}`}>
        <h2 className="title-job">{enterprise}</h2>
        <div className="timelapse">
            <span className="init">{initTime}</span>
            <span className="hyphen">-</span>
            <span className="last">{lastTime}</span>
        </div>
        <p className="description">{description}</p>
        <div className="skills">
            <span className="title">{experience.general.skills[language]}</span>
            <ul className="list">
                {listSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
        <figure className="logo"><img src={enterpriseLogos[enterprise]} alt={enterprise}/></figure>
    </div>
}

export default ItemExperience