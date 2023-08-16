import "./Home.css"
import commons from "../../utils/locales/common.json";

import {ReactComponent as GreaterIcon} from "../../assets/img/icons/svg/greater-icon.svg";
import {ReactComponent as LessIcon} from "../../assets/img/icons/svg/less-icon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/img/icons/svg/twitter-icon.svg";
import {ReactComponent as GithubIcon} from "../../assets/img/icons/svg/github-icon.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/img/icons/svg/linkedin-icon.svg";
import {ReactComponent as CodewarsIcon} from "../../assets/img/icons/svg/codewars-icon.svg";
import {ReactComponent as DevtoIcon} from "../../assets/img/icons/svg/devto-icon.svg";
import {ReactComponent as DownloadIcon} from "../../assets/img/icons/svg/download-icon.svg";

import Model3D from "../Model3D/Model3D.jsx";
import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";
import Button from "../utils/Button/Button.jsx";


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
                <ul className="links-cv">
                    <li><a href="https://twitter.com/LuisZapataYamo" rel="noreferrer" target="_blank"><TwitterIcon/></a></li>
                    <li><a href="https://www.codewars.com/users/LuisZapataYamo" rel="noreferrer" target="_blank"><CodewarsIcon/></a></li>
                    <li><a href="https://dev.to/luiszapatayamo" rel="noreferrer" target="_blank"><DevtoIcon/></a></li>
                    <li><a href="https://github.com/LuisZapataYamo" rel="noreferrer" target="_blank"><GithubIcon/></a></li>
                    <li><a href="https://www.linkedin.com/in/luiszapatayamodev/" rel="noreferrer" target="_blank"><LinkedinIcon/></a></li>
                    <li className="download"><Button text={dataHome.download[language]} w="100%" h="100%" icon={<DownloadIcon />} to="./CV_LuisZapataYamo.pdf" linkOutside={true}/></li>
                </ul>
            </div>
            <div className="model-3d">
                <Model3D className="content"/>
            </div>
        </div>
    </div>
}

export default Home