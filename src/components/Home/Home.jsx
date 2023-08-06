import "./Home.css"
import commons from "../../utils/locales/common.json";

import {ReactComponent as GreaterIcon} from "../../assets/img/icons/greater-icon.svg";
import {ReactComponent as LessIcon} from "../../assets/img/icons/less-icon.svg";
import Model3D from "../Model3D/Model3D.jsx";
import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";


const Home = () => {
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);
    const dataHome = commons["home"]

    return <div className={`main-container ${theme}`}>
        <div className="home">
            <div className="content">
                <span className="hi">
                    {dataHome.hello[language]}
                </span>
                <div className="name">
                    <GreaterIcon className="icon icon-left"/>
                    <span className="text">Luis Zapata</span>
                    <LessIcon className="icon icon-right"/>
                </div>
                <p className="description">
                    {dataHome.description[language]}
                </p>
                <p className="enjoy">{dataHome.enjoy[language]}</p>
            </div>
            <div className="model-3d">
                <Model3D className="content"/>
            </div>
        </div>
    </div>
}

export default Home