import "./Skills.css"

import {skills} from "../../utils/locales/common.json";

// Import img for front technologies
import reactImg from "../../assets/img/icons/png/react.png";
import jsImg from "../../assets/img/icons/png/js.png";
import cssImg from "../../assets/img/icons/png/css.png";
import htmlImg from "../../assets/img/icons/png/html.png";

// Import img for back technologies
import djangoImg from "../../assets/img/icons/png/django.png";
import djangorestImg from "../../assets/img/icons/png/djangorest.png";
import pythonImg from "../../assets/img/icons/png/python.png";
import javaImg from "../../assets/img/icons/png/java.png";

// Import img for database technologies
import postgresImg from "../../assets/img/icons/png/postgres.png";
import mysqlImg from "../../assets/img/icons/png/mysql.png";
import firebaseImg from "../../assets/img/icons/png/firebase.png";

// Import img for tools
import figmaImg from "../../assets/img/icons/png/figma.png";
import illustratorImg from "../../assets/img/icons/png/illustrator.png";
import githubImg from "../../assets/img/icons/png/github.png";
import gitlabImg from "../../assets/img/icons/png/gitlab.png";
import gitImg from "../../assets/img/icons/png/git.png";
import pycharmImg from "../../assets/img/icons/png/pycharm.png";
import awsImg from "../../assets/img/icons/png/aws.png";
import seleniumImg from "../../assets/img/icons/png/selenium.png";
import pandasImg from "../../assets/img/icons/png/pandas.png";
import airflowImg from "../../assets/img/icons/png/airflow.png";
import excelImg from "../../assets/img/icons/png/excel.png";

// Import img for automatization
import digitaloImg from "../../assets/img/icons/png/digitalo.png";


import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";

const Skills = () => {
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);

    return <div className={`container-skills ${theme}`}>
        <h1 className="title">{skills.title[language]}</h1>
        <div className="technologics">
            <div className="frontend">
                <h2 className="title">{skills.frontend[language]}</h2>
                <ul>
                    <li data-tooltip="React.js"><img src={reactImg} alt="React.js"/></li>
                    <li data-tooltip="Javascript"><img src={jsImg} alt="Javascript"/></li>
                    <li data-tooltip="CSS"><img src={cssImg} alt="CSS"/></li>
                    <li data-tooltip="HTML"><img src={htmlImg} alt="HTML"/></li>
                </ul>
            </div>
            <div className="backend">
                <h2 className="title">{skills.backend[language]}</h2>
                <ul>
                    <li data-tooltip="Python"><img src={pythonImg} alt="Python"/></li>
                    <li data-tooltip="Django"><img src={djangoImg} alt="Django"/></li>
                    <li data-tooltip="Django Rest Framework"><img src={djangorestImg} alt="Django Rest Framework"/></li>
                    <li data-tooltip="Java"><img src={javaImg} alt="Java"/></li>
                </ul>
            </div>
            <div className="database">
                <h2 className="title">{skills.database[language]}</h2>
                <ul>
                    <li data-tooltip="PostgreSQL"><img src={postgresImg} alt="PostgreSQL"/></li>
                    <li data-tooltip="MySQL"><img src={mysqlImg} alt="MySQL"/></li>
                    <li data-tooltip="Firebase"><img src={firebaseImg} alt="Firebase"/></li>
                </ul>
            </div>
            <div className="tools">
                <h2 className="title">{skills.tools[language]}</h2>
                <ul>
                    <li data-tooltip="Figma"><img src={figmaImg} alt="Figma"/></li>
                    <li data-tooltip="Adobe Illustrator"><img src={illustratorImg} alt="Adobe Illustrator"/></li>
                    <li data-tooltip="GitHub" className="github"><img src={githubImg} alt="GitHub"/></li>
                    <li data-tooltip="GitLab"><img src={gitlabImg} alt="GitLab"/></li>
                    <li data-tooltip="Git"><img src={gitImg} alt="Git"/></li>
                    <li data-tooltip="PyCharm"><img src={pycharmImg} alt="PyCharm"/></li>
                    <li data-tooltip="Amazon Web Services (AWS)"><img src={awsImg} alt="Amazon Web Services (AWS)"/></li>
                </ul>
            </div>
            <div className="automatization">
                <h2 className="title">{skills.data[language]}</h2>
                <ul>
                    <li data-tooltip="Selenium"><img src={seleniumImg} alt="Selenium"/></li>
                    <li data-tooltip="Pandas"><img src={pandasImg} alt="Pandas"/></li>
                    <li data-tooltip="Apache Airflow"><img src={airflowImg} alt="Apache Airflow"/></li>
                    <li data-tooltip="Microsoft Excel"><img src={excelImg} alt="Microsoft Excel"/></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Skills