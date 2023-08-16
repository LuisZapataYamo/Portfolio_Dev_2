import "./Blog.css"

import blog from "../../assets/img/icons/png/blog.png"

import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalStateContext.jsx";

const Blog = () => {
    const {theme, language} = useContext(GlobalContext);
    return <div className={`container-blog ${theme}`}>
        Coming soon
        <img src={blog} alt=""/>
    </div>
}

export default Blog