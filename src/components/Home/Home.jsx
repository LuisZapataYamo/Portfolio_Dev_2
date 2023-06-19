import "./Home.css"

import { ReactComponent as GreaterIcon } from "../../assets/img/icons/greater-icon.svg";
import { ReactComponent as LessIcon } from "../../assets/img/icons/less-icon.svg";


const Home = () => {

    return <div className="main-container">
        <div className="home">
            <div className="content">
                <span className="hi">Hi, I'm</span>
                <div className="name">
                    <GreaterIcon className="icon icon-left" />
                    <span className="text">Luis Zapata</span>
                    <LessIcon className="icon icon-right" />
                </div>
                <p className="description">I am a front-end developer, back-end developer and soon to be data scientist.</p>
                <p className="enjoy">Enjoy your trip!</p>
            </div>
            <div className="model-3d">
                <canvas></canvas>
            </div>
        </div>
    </div>
}

export default Home