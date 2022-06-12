import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

import {API_IMAGE_URL} from "../../constants";
import {moviesActions} from "../../redux/slice";
import {Trailer} from "../Trailer";

const Header = () => {
    const {
        selectedMovie: {
            id,
            backdrop_path,
            poster_path,
            original_title,
            overview,
            vote_average
        },
        trailer
    } = useSelector(state => state.movies);    // console.log(selectedMovie);
    const dispatch = useDispatch();
    console.log(id);


    useEffect(() => {
        if (id !== undefined) {
            dispatch(moviesActions.getTrailer({id}));
        }
    }, [id]);


    return (
        <header className="header">
            <img src={API_IMAGE_URL + backdrop_path} alt="background"/>
            <div className="film_desc">
                <div className="movie_info">
                    <img src={API_IMAGE_URL + poster_path} alt="poster"/>
                    <h2>{original_title}</h2>
                    <p>{overview}</p>
                    <span className="rating">
                                  {vote_average && <StarRatings
                                      rating={vote_average / 2}
                                      starDimension='30px'
                                      numberOfStars={5}
                                      starSpacing="1px"
                                      starRatedColor='grey'/>} {vote_average && vote_average}
                    </span>

                </div>
                <Trailer trailer={trailer}/>
            </div>
        </header>
    );
};

export {Header};
