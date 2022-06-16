import React from 'react';
import {Content, PopularSection, TrendingMovies, TrendingTV} from "../../components";

const Home = () => {
    return (
        <Content>
            <PopularSection/>
            <TrendingMovies/>
            <TrendingTV/>
        </Content>
    );
};

export {Home};