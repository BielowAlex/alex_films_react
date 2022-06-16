import React from 'react';
import {MoviesCart} from "../MoviesCart";
import {CartLink} from "../CartLink";

const MoviesList = ({movies,isLinks,selectMovie}) => {
    return (
        <div className="movies_list">
            {movies && movies.map(movie=>!isLinks
                ?
                <MoviesCart key={movie.id} movie={movie} selectMovie={selectMovie}/>
                :
                <CartLink key={movie.id} movie={movie} />)}
        </div>
    );
};

export {MoviesList};
