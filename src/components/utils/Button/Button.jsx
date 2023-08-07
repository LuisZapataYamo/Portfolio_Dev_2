import "./Button.css"
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {GlobalContext} from "../../../context/GlobalStateContext.jsx";

const Button = ({
                    text,
                    icon,
                    to = "/",
                    linkOutside = false, // Nueva propiedad
                    ph = '0',
                    pv = '0',
                    h = '0',
                    w = '0',
                    radius = '5px',
                    bgcolor = "var(--yellow)",
                    txcolor = "var(--black)",
                    fsize = '1.5rem',
                    c = "",
                }) => {
    const {theme} = useContext(GlobalContext);

    // Componente interno para evitar duplicación de código
    const InnerButton = () => (
        <div style={{
            paddingLeft: ph,
            paddingRight: ph,
            paddingTop: pv,
            paddingBottom: pv,
            height: h,
            width: w,
            borderRadius: radius
        }}>
            <span className="text" style={{fontSize: fsize}}>{text}</span>
            {icon}
        </div>
    );

    // Usar etiqueta 'a' si downloadLink es verdadero, de lo contrario usar 'Link'
    return linkOutside ? (
        <a href={to} download className={`button-component ${theme} ${c}`}>
            <InnerButton />
        </a>
    ) : (
        <Link to={to} className={`button-component ${theme} ${c}`}>
            <InnerButton />
        </Link>
    );
};

export default Button;
