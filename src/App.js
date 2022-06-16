import './styles/style.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Home, MovieInfo, MovieSearch} from "./pages";
import {Movies} from "./pages/Movies";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<MovieInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
