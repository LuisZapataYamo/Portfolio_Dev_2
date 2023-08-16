import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home/Home.jsx";
import GlobalStateContext from "../context/GlobalStateContext.jsx";
import Skills from "../components/Skills/Skills.jsx";
import About from "../components/About/About.jsx";
import Experience from "../components/Experience/Experience.jsx";

const Routing = () => {
    return (
        <>
            <GlobalStateContext>
                <BrowserRouter basename="/LuisZapataDev/">
                    <Routes>
                        <Route element={<App/>}>
                            <Route index element={<Home/>}/>
                            <Route path='/about/' element={<About/>} />
                            <Route path='/skills/' element={<Skills/>} />
                            <Route path='/experience/' element={<Experience/>} />
                        </Route>


                        {/*<Route element={<BlogLayout/>}>*/}
                        {/*    <Route path='/blog/' element={<BlogHome/>}/>*/}
                        {/*    <Route path='/blog/article/:id' element={<Article/>}/>*/}
                        {/*    <Route path='/blog/articles/' element={<SearchList/>}/>*/}
                        {/*</Route>*/}
                    </Routes>
                </BrowserRouter>
            </GlobalStateContext>
        </>
    )
}

export default Routing