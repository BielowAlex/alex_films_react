import React from 'react';
import {Link} from "react-router-dom";
import {API_IMAGE_URL} from "../../constants";

const CartLink = ({movie, selectMovie}) => {
    const {id,original_title,name,first_air_date,release_date,poster_path} = movie;

    return (
        <Link
            className="movies_cart"
            to={`/movies/${id}`}
            onClick={()=>selectMovie(movie)} target={"_blank"}>
            <div className="poster">
                <img width={193} height={280} src={API_IMAGE_URL+poster_path} alt="poster"/>
            </div>
            <div className="cart_title">
                <h4>{original_title?original_title:name}</h4>
                <span className="year">{release_date?release_date:first_air_date}</span>
            </div>
        </Link>
    );
};

export {CartLink};
