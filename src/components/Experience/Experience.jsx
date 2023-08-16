import "./Experience.css"

import {experience} from "../../utils/locales/common.json";

import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";
import ItemExperience from "../utils/ItemExperience/ItemExperience.jsx";
const Experience = () => {
    const {theme, language} = useContext(GlobalContext);

    return <div className={`container-experience ${theme}`}>
        <h1 className="title">{experience.general.title[language]}</h1>
        <div className="list-experience">
            {experience.jobs.map((job, index) => (
                <ItemExperience
                    enterprise={job.enterprise}
                    initTime={job.init_time[language]}
                    lastTime={job.last_time[language]}
                    description={job.description[language]}
                    listSkills={job.skills}
                    key={index}
                />
            ))}
        </div>
    </div>
}


export default Experience