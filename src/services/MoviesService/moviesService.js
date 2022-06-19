import {axiosService} from "../axios_service";
import {urls} from "../../constants";

const moviesService = {
    getMovies:(pageNum,genreId)=>axiosService
        .get(`${urls.movies}?page=${pageNum}&with_genres=${genreId}`),

    getMovieByID:(movieID)=> axiosService
        .get(`${urls.movie}/${movieID}?append_to_response=videos`),

    getGenres:()=>axiosService
        .get(urls.genres),

    getPopular:()=>axiosService
        .get(`${urls.popular}?append_to_response=videos`),

    getTrendingMovies:(pageNum)=>axiosService
        .get(`${urls.trendingMovies}?page=${pageNum}`),

    getTrendingTV:(pageNum)=>axiosService
        .get(`${urls.trendingTV}?page=${pageNum}`),

    searchMovie:(query,pageNum)=>axiosService
        .get(`${urls.search}?query=${query}&page=${pageNum}`)
}

export {
    moviesService
}