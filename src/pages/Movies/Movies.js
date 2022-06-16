import React, {useEffect} from 'react';
import {Content, Genres, MoviesList} from "../../components";
import {Flipper} from "../../components/Flipper";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";

const Movies = () => {
    const {movies, genreID, pageNum} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getConcreteMovies({pageNum,genreID}))
    }, [dispatch, genreID, pageNum]);
    const selectMovie = (movie) => {
        dispatch(moviesActions.setMovie(movie));
    }

    return (
        <Content>
            <Genres/>
            <MoviesList movies={movies && movies} isLinks={true} selectMovie={selectMovie}/>
            <Flipper/>
        </Content>
    );
};

export {Movies};
