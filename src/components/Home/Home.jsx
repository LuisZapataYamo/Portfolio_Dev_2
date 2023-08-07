import "./Home.css"
import commons from "../../utils/locales/common.json";

import {ReactComponent as GreaterIcon} from "../../assets/img/icons/greater-icon.svg";
import {ReactComponent as LessIcon} from "../../assets/img/icons/less-icon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/img/icons/twitter-icon.svg";
import {ReactComponent as GithubIcon} from "../../assets/img/icons/github-icon.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/img/icons/linkedin-icon.svg";
import {ReactComponent as CodewarsIcon} from "../../assets/img/icons/codewars-icon.svg";
import {ReactComponent as DevtoIcon} from "../../assets/img/icons/devto-icon.svg";
import {ReactComponent as DownloadIcon} from "../../assets/img/icons/download-icon.svg";

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
                    <li><TwitterIcon/></li>
                    <li><CodewarsIcon/></li>
                    <li><DevtoIcon/></li>
                    <li><GithubIcon/></li>
                    <li><LinkedinIcon/></li>
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