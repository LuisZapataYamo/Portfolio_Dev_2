import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";

const Routing = () => {
    return (
        <BrowserRouter basename="/LuisZapataDev/">
            <Routes>
                <Route index path='/' element={<App/>}/>

                {/*<Route element={<BlogLayout/>}>*/}
                {/*    <Route path='/blog/' element={<BlogHome/>}/>*/}
                {/*    <Route path='/blog/article/:id' element={<Article/>}/>*/}
                {/*    <Route path='/blog/articles/' element={<SearchList/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default Routing