const baseURL = process.env.REACT_APP_API;
const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE;

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    popular:'/movie/popular',
    trendingMovies:'/trending/movie/week',
    trendingTV:'/trending/tv/week'
}

export {
    baseURL,
    API_IMAGE_URL,
    urls
}