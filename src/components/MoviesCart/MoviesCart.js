import React from 'react';

const MoviesCart = () => {
    return (
        <div className="movies_cart">
            <div className="poster">
                <img src="/img/film.jpg" alt="poster"/>
            </div>
            <div className="cart_title">
                <h4>The little things</h4>
                <span className="year">2022</span>
            </div>
        </div>
    );
};

export {MoviesCart};
