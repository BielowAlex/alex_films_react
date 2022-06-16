import React, {useEffect} from 'react';
import {Content} from "../../components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {API_IMAGE_URL} from "../../constants";
import {moviesActions} from "../../redux/slice";
import StarRatings from "react-star-ratings/build/star-ratings";
import {Trailer} from "../../components/Trailer";

const MovieInfo = () => {

    const param = useParams();
    const {
        selectedMovie: {
            backdrop_path,
            poster_path,
            original_title,
            overview,
            vote_average
        },
        trailer
    } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.setMovie(param.id))
        dispatch(moviesActions.getTrailer(param.id))
    }, [dispatch, param]);


    return (
        <Content>
            <div className="movie_detail">
                <div className="back_poster">
                    <img src={API_IMAGE_URL + backdrop_path} alt="back"/>
                </div>
                <div className="detail">
                    <div className="top_detail">
                        <div className="poster">
                            <img src={API_IMAGE_URL + poster_path} alt=""/>
                        </div>
                        <div className="about_movie">
                            <h2>{original_title}</h2>
                            <span className="rating">
                                  {vote_average && <StarRatings
                                      rating={vote_average / 2}
                                      starDimension='30px'
                                      numberOfStars={5}
                                      starSpacing="1px"
                                      starRatedColor='#2e386e'/>}

                                <span className="rating_count">
                                 {vote_average}
                                </span>
                             </span>
                        </div>
                    </div>
                    <div className="bot_detail">
                        <p className="overview">
                            {overview}
                        </p>
                        <Trailer trailer={trailer}/>
                    </div>
                </div>

            </div>

        </Content>
    );
};

export {MovieInfo};
