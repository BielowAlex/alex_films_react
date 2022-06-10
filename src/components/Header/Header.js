import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <img src="/img/header_back.jpg" alt="background"/>
            <div className="film_desc">
                <img src="/img/header_back.jpg" alt="poster"/>
                <h2>승리호 Space Sweepers</h2>
                <p>In the year 2092, space is full of dangerous floating garbage like discarded satellites and
                    deserted spaceships. The crew of a space junk collector ship called The Victory discovers a
                    humanoid robot that’s known to be a weapon of mass destruction. They get involved in a risky
                    business deal and travel through space looking for garbage they can make money off of while also
                    competing with rival junk collectors.</p>
                <span className="rating">
                        7.0
                    </span>
            </div>
        </header>
    );
};

export {Header};
