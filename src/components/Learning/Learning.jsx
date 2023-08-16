import "./Learning.css"

import brain from "../../assets/img/icons/png/brain.png"

import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";
import blog from "../../assets/img/icons/png/blog.png";

const Learning = () => {
    const {theme, language} = useContext(GlobalContext);
    return <div className={`container-learning ${theme}`}>
        Coming soon
        <img src={brain} alt=""/>
    </div>
}

export default Learning