import "./Button.css"
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalStateContext.jsx";

const Button = ({
                    text,
                    icon,
                    to,
                    ph = '0',
                    pv = '0',
                    h = '0',
                    w = '0',
                    bgcolor = "var(--yellow)",
                    txcolor = "var(--black)",
                    fsize = '1.5rem'
                }) => {
    const {theme, setTheme, language, setLanguage} = useContext(GlobalContext);

    return (
        <Link to={to} className={`button-component ${theme}`}>
            <div style={{
                paddingLeft: ph,
                paddingRight: ph,
                paddingTop: pv,
                paddingBottom: pv,
                height: h,
                width: w
            }}>
                <span className="text" style={{fontSize: fsize}}>{text}</span>
                {icon && {icon}} {/* Utilicé una etiqueta img para mostrar el icono */}
            </div>
        </Link>
    );
};

export default Button;
