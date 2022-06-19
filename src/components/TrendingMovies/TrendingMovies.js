import React, {useEffect} from 'react';
import {MoviesList} from "../MoviesList";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";
import {Link, useLocation} from "react-router-dom";

const TrendingMovies = () => {
    const dispatch = useDispatch();
    const {trendingMovies ,pageNum} = useSelector(state => state.movies);
    useEffect(() => {
        dispatch(moviesActions.getTrendingMovies(pageNum))
    }, [dispatch,pageNum]);
    const {pathname} = useLocation();

    const selectMovie = (movie) => {
        dispatch(moviesActions.setMovie(movie));
    }


    return (
        <Link to="/movies" className="content_item movies_section">
            <div className="title">
                <h3>Trending movies</h3>
            </div>
            <MoviesList movies={trendingMovies} isLinks={false} selectMovie={selectMovie}/>
            {pathname==="/"?<Link to="/movies">See more</Link>:null}
        </Link>
    );
};


export {TrendingMovies};
