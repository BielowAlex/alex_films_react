import React,{useEffect} from 'react';
import {MoviesList} from "../MoviesList";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slice";
import {Link, useLocation} from "react-router-dom";

const TrendingTV = () => {

    const dispatch = useDispatch();
    const {trendingTV,pageNum} = useSelector(state => state.movies)
    const {pathname} = useLocation();

    useEffect(() => {
        dispatch(moviesActions.getTrendingTV(pageNum))
    }, [dispatch,pageNum]);


    return (
        <div className="content_item movies_section">
            <div className="title">
                <h3>Trending tv</h3>
            </div>
            <MoviesList movies={trendingTV} isLinks={true}/>
            {pathname==="/"?<Link to="/movies?genres=tv">See more</Link>:null}
        </div>
    );
};

export {TrendingTV};
