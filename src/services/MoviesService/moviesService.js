import {axiosService} from "../axios_service";
import {urls} from "../../constants";

const moviesService = {
    getMovie:(pageNum,genreId)=>axiosService
        .get(`${urls.movies}?page=${pageNum}&with_genres=${genreId}&append_to_response=videos`),

    getMovieByID:(movieID)=> axiosService
        .get(`${urls.movie}/${movieID}?append_to_response=videos`),

    getGenres:()=>axiosService.get(urls.genres),

    getPopular:()=>axiosService.get(`${urls.popular}?append_to_response=videos`),
}

export {
    moviesService
}