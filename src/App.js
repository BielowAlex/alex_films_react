import './styles/style.css';

function App() {
    return (
        <div className="wrapper">
            <nav className="nav">
                <div className="logo">
                    <img width={58} height={58} src="/img/logo.png" alt="logo"/>
                </div>
                <div className="search">
                    <label>
                        <input type="text"/>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38.8313 36.1688L32.4563 29.8125C34.5131 27.1921 35.6291 23.9562 35.625 20.625C35.625 17.6583 34.7453 14.7582 33.097 12.2915C31.4488 9.82472 29.1061 7.90213 26.3653 6.76681C23.6244 5.6315 20.6084 5.33445 17.6987 5.91323C14.7889 6.49201 12.1162 7.92062 10.0184 10.0184C7.92062 12.1162 6.49201 14.7889 5.91323 17.6987C5.33445 20.6084 5.6315 23.6244 6.76681 26.3653C7.90213 29.1061 9.82472 31.4488 12.2915 33.097C14.7582 34.7453 17.6583 35.625 20.625 35.625C23.9562 35.6291 27.1921 34.5131 29.8125 32.4563L36.1688 38.8313C36.3431 39.007 36.5504 39.1465 36.7789 39.2417C37.0074 39.3369 37.2525 39.3859 37.5 39.3859C37.7475 39.3859 37.9926 39.3369 38.2211 39.2417C38.4496 39.1465 38.6569 39.007 38.8313 38.8313C39.007 38.6569 39.1465 38.4496 39.2417 38.2211C39.3369 37.9926 39.3859 37.7475 39.3859 37.5C39.3859 37.2525 39.3369 37.0074 39.2417 36.7789C39.1465 36.5504 39.007 36.3431 38.8313 36.1688ZM9.37501 20.625C9.37501 18.4 10.0348 16.2249 11.271 14.3748C12.5071 12.5248 14.2641 11.0828 16.3198 10.2314C18.3755 9.37988 20.6375 9.15709 22.8198 9.59117C25.0021 10.0253 27.0066 11.0967 28.58 12.6701C30.1533 14.2434 31.2248 16.248 31.6588 18.4302C32.0929 20.6125 31.8701 22.8745 31.0187 24.9302C30.1672 26.9859 28.7252 28.7429 26.8752 29.979C25.0251 31.2152 22.85 31.875 20.625 31.875C17.6413 31.875 14.7798 30.6897 12.6701 28.58C10.5603 26.4702 9.37501 23.6087 9.37501 20.625Z"
                                fill="white"/>
                        </svg>
                    </label>
                </div>
            </nav>
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
            <div className="content">
                <div className="content_item popular">

                    <h3>Popular movies</h3>
                    <div className="popular_carrousel">
                        <svg width="25.618px" height="25.618px" viewBox="-5 0 25.618 25.618"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Layer_77" transform="translate(-8.191 -3.191)">
                                <g id="Group_35">
                                    <rect id="Rectangle_38" width="18.141" height="3.947" rx="1.954"
                                          transform="translate(8.191 16.019) rotate(-45)" fill="#ffff"/>
                                </g>
                                <g id="Group_36">
                                    <rect id="Rectangle_39" width="3.947" height="18.141" rx="1.954"
                                          transform="translate(8.191 15.981) rotate(-45)" fill="#ffff"/>
                                </g>
                            </g>
                        </svg>
                        <div className="carrousel_screen">
                            <div className="popular_list">
                                <div className="movies_cart">
                                    <div className="poster">
                                        <img src="/img/film.jpg" alt="poster"/>
                                    </div>
                                    <div className="cart_title">
                                        <h4>The little things</h4>
                                        <span className="year">
                                             2022
                                         </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <svg width="25px" height="25px" viewBox="-5 0 25 25" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">

                            <title>right</title>
                            <desc>Created with Sketch.</desc>
                            <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="ui-gambling-website-lined-icnos-casinoshunter"
                                   transform="translate(-1783.000000, -158.000000)" fill="#ffff" fillRule="nonzero">
                                    <g id="1" transform="translate(1350.000000, 120.000000)">
                                        <path
                                            d="M436.453517,38.569249 L447.302459,48.9938158 L447.39261,49.0748802 C447.75534,49.423454 447.968159,49.8870461 448,50.4382227 L447.998135,50.6228229 C447.968159,51.1129539 447.75534,51.576546 447.333675,51.9774469 L447.339095,51.9689832 L436.453517,62.430751 C435.663694,63.1897497 434.399001,63.1897497 433.609178,62.430751 C432.796941,61.650213 432.796941,60.3675924 433.609432,59.5868106 L443.012324,50.5572471 L433.609178,41.4129456 C432.796941,40.6324076 432.796941,39.349787 433.609178,38.569249 C434.399001,37.8102503 435.663694,37.8102503 436.453517,38.569249 Z"
                                            id="right"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="content_item movies_section">
                    <div className="title">
                        <h3>Trending movies</h3>
                    </div>
                    <div className="movies_list">
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>

                    </div>
                    <a href="#">See more</a>
                </div>
                <div className="content_item movies_section">
                    <div className="title">
                        <h3>Trending tv</h3>
                    </div>
                    <div className="movies_list">
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>
                        <div className="movies_cart">
                            <div className="poster">
                                <img src="/img/film.jpg" alt="poster"/>
                            </div>
                            <div className="cart_title">
                                <h4>The little things</h4>
                                <span className="year">
                                             2022
                                         </span>
                            </div>
                        </div>

                    </div>
                    <a href="#">See more</a>
                </div>
            </div>
            <footer className='footer'>
                <div className="logo">
                    <img width={58} height={58} src="/img/logo.png" alt="logo"/>
                </div>
                <span className="powered">
                    Powered by TMBD.
                </span>

            </footer>

        </div>
    );
}

export default App;
