import React from 'react';
import {API_IMAGE_URL} from "../../constants";

const MoviesCart = ({movie, selectMovie}) => {
    const {id,original_title,name,first_air_date,release_date,poster_path} = movie;
    return (
        <div className="movies_cart" onClick={()=>selectMovie(movie)}>
            <div className="poster">
                <img width={193} height={280} src={API_IMAGE_URL+poster_path} alt="poster"/>
            </div>
            <div className="cart_title">
                <h4>{original_title?original_title:name}</h4>
                <span className="year">{release_date?release_date:first_air_date}</span>
            </div>
        </div>
    );
};

export {MoviesCart};
