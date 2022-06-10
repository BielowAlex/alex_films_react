
import './styles/style.css';
import {Footer, Header, Navigation, PopularSection, TrendingMovies, TrendingTV} from "./components";


function App() {
    return (
        <div className="wrapper">
           <Navigation/>
            <Header/>
            <div className="content">
                <PopularSection/>
                <TrendingMovies/>
                <TrendingTV/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
