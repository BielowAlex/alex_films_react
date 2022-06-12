const baseURL = process.env.REACT_APP_API;
const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE;

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    popular:'/movie/popular'
}

export {
    baseURL,
    API_IMAGE_URL,
    urls
}