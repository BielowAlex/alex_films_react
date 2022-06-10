import React from 'react';
import {MoviesList} from "../MoviesList";

const TrendingMovies = () => {
    return (
        <div className="content_item movies_section">
            <div className="title">
                <h3>Trending movies</h3>
            </div>
            <MoviesList/>
            <a href="#">See more</a>
        </div>
    );
};

export {TrendingMovies};
