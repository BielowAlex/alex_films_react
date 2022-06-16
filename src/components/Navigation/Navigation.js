import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slice";

const Navigation = () => {
    const [query, setQuery] = useState('');
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const search = () => {
        dispatch(moviesActions.setQuery(query));
    };
    return (
        <nav className="nav">
            <Link to="/" className="logo">
                <img width={58} height={58} src="/img/logo.png" alt="logo"/>
            </Link>

            <ul className="navs">
                <li><Link to="/" className={pathname === "/" ? "_active" : ''}>Home</Link></li>
                <li><Link to="/movies" className={pathname === "/movies" ? "_active" : ''}>Movies</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                {/*<li><Link></Link></li>*/}
            </ul>

            <div className="search">
                <label>
                    <input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        onInput={search}/>
                    <Link to="/search" onClick={search}>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38.8313 36.1688L32.4563 29.8125C34.5131 27.1921 35.6291 23.9562 35.625 20.625C35.625 17.6583 34.7453 14.7582 33.097 12.2915C31.4488 9.82472 29.1061 7.90213 26.3653 6.76681C23.6244 5.6315 20.6084 5.33445 17.6987 5.91323C14.7889 6.49201 12.1162 7.92062 10.0184 10.0184C7.92062 12.1162 6.49201 14.7889 5.91323 17.6987C5.33445 20.6084 5.6315 23.6244 6.76681 26.3653C7.90213 29.1061 9.82472 31.4488 12.2915 33.097C14.7582 34.7453 17.6583 35.625 20.625 35.625C23.9562 35.6291 27.1921 34.5131 29.8125 32.4563L36.1688 38.8313C36.3431 39.007 36.5504 39.1465 36.7789 39.2417C37.0074 39.3369 37.2525 39.3859 37.5 39.3859C37.7475 39.3859 37.9926 39.3369 38.2211 39.2417C38.4496 39.1465 38.6569 39.007 38.8313 38.8313C39.007 38.6569 39.1465 38.4496 39.2417 38.2211C39.3369 37.9926 39.3859 37.7475 39.3859 37.5C39.3859 37.2525 39.3369 37.0074 39.2417 36.7789C39.1465 36.5504 39.007 36.3431 38.8313 36.1688ZM9.37501 20.625C9.37501 18.4 10.0348 16.2249 11.271 14.3748C12.5071 12.5248 14.2641 11.0828 16.3198 10.2314C18.3755 9.37988 20.6375 9.15709 22.8198 9.59117C25.0021 10.0253 27.0066 11.0967 28.58 12.6701C30.1533 14.2434 31.2248 16.248 31.6588 18.4302C32.0929 20.6125 31.8701 22.8745 31.0187 24.9302C30.1672 26.9859 28.7252 28.7429 26.8752 29.979C25.0251 31.2152 22.85 31.875 20.625 31.875C17.6413 31.875 14.7798 30.6897 12.6701 28.58C10.5603 26.4702 9.37501 23.6087 9.37501 20.625Z"
                                fill="white"/>
                        </svg>
                    </Link>
                </label>
            </div>
        </nav>
    );
};

export {Navigation};
