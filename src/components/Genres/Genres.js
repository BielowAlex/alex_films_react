import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";
import {useLocation} from "react-router-dom";

const Genres = () => {
    const {genres, genreID} = useSelector(state => state.movies);


    const dispatch = useDispatch();
    const location = useLocation();
    let {search} = location;
    const [params, setParams] = useState(search);

    useEffect(() => {
        dispatch(moviesActions.getGenres());
        dispatch(moviesActions.setGenres(''))
    }, [dispatch, search]);

    const genresToggle = async (genre) => {
        await dispatch(moviesActions.setGenres(genre.id));
        setParams('');
    }

    return (
        <div className="genres">
            <ul className="top_genres_list">
                <li
                    className={params.includes('popular') ? '_active' : ''}
                    onClick={()=>setParams('popular')}>
                    Popular Movies
                </li>
                <li
                    className={params.includes('trending') ? '_active' : ''}
                    onClick={()=>setParams('trending')}>
                    Trending Movies
                </li>
                <li className={params.includes('TV') ? '_active' : ''}
                    onClick={()=>setParams('TV')}>
                    Trending TV
                </li>
            </ul>
            <ul className="genres_list">
                {genres && genres
                    .map(genre =>
                        <li
                            key={genre.id}
                            className={genreID === genre.id ? '_active' : ''}
                            onClick={() => genresToggle(genre)}>
                            {genre.name}
                        </li>)}
            </ul>
        </div>
    );
};

export {Genres};
