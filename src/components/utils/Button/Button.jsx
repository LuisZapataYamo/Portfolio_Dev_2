import "./Button.css"
import { Link } from 'react-router-dom';

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
    return (
        <Link to={to} className="button-component">
            <div style={{
                paddingLeft: ph,
                paddingRight: ph,
                paddingTop: pv,
                paddingBottom: pv,
                height: h,
                width: w,
                backgroundColor: bgcolor,
                color: txcolor
            }}>
                <span className="text" style={{ fontSize: fsize }}>{text}</span>
                {icon && { icon }} {/* Utilicé una etiqueta img para mostrar el icono */}
            </div>
        </Link>
    );
};

export default Button;
