import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopular',
    async () => {
        const {data} = await moviesService.getPopular()
        return data;
    });

const getConcreteMovies = createAsyncThunk(
    'moviesSlice/getConcreteMovies',
    async ({pageNum, genreID}) => {
        const {data} = await moviesService.getMovies(pageNum, genreID)
        return data;
    });

const getTrendingMovies = createAsyncThunk(
    'moviesSlice/getTrendingMovies',
    async (pageNum) => {
        const {data} = await moviesService.getTrendingMovies(pageNum)
        return data;
    });
const getTrendingTV = createAsyncThunk(
    'moviesSlice/getTrendingTV',
    async (pageNum) => {
        const {data} = await moviesService.getTrendingTV(pageNum)
        return data;
    });


const getTrailer = createAsyncThunk(
    'moviesSlice/getTrailer',
    async (id) => {
        if (id !== undefined) {
            const {data} = await moviesService.getMovieByID(id)
            return data.videos.results;
        }
        return null;

    });

const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async () => {
        const {data} = await moviesService.getGenres();
        return data.genres;
    });

const setMovie = createAsyncThunk(
    'moviesSlice/setMovie',
    async (movie) => {
        console.log(typeof movie)
        if (typeof movie === 'object') {
            return movie;
        }else if(typeof movie==='string'){
            const {data} =await moviesService.getMovieByID(movie);
            return data
        }
    });



const initialState = {
    movies: [],
    trendingMovies: [],
    trendingTV: [],
    popularMovies: [],
    selectedMovie: [],
    genres: null,
    genreID: '',
    pageNum: 1,
    totalPage: null,
    trailer: null
};

const MoviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovie: (state, action) => {


        },
        nextPage: (state) => {
            if (state.pageNum <= state.totalPage) {
                state.pageNum += 1;
            }
        },
        prevPage: (state) => {
            if (state.pageNum > 1) {
                state.pageNum -= 1;
            }
        },
        setGenres: (state, action) => {
            state.genreID = action.payload;
        }
    },
    extraReducers: {
        [getPopularMovies.fulfilled]: (state, action) => {
            state.popularMovies = action.payload;
            state.selectedMovie = action.payload.results[0];
        },

        [getTrendingMovies.fulfilled]: (state, action) => {
            state.trendingMovies = action.payload.results;
            state.totalPage = action.payload.total_pages > 500 ? 500 : action.payload.total_pages;
        },

        [getTrendingTV.fulfilled]: (state, action) => {
            state.trendingTV = action.payload.results;
            state.totalPage = action.payload.total_pages > 500
                ? 500
                : action.payload.total_pages;
        },

        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload;
            state.pageNum = 1;
        },

        [getConcreteMovies.fulfilled]: (state, action) => {
            state.movies = action.payload.results;
            state.totalPage = action.payload.total_pages > 500
                ? 500
                : action.payload.total_pages;
        },

        [getTrailer.fulfilled]: (state, action) => {
            console.log(action.payload);
            const trailer = action.payload.find(vid => vid.name === 'Official Trailer')
            if (trailer === undefined) {
                state.trailer = action.payload[0];
            } else {
                state.trailer = trailer;
            }
        },
        [setMovie.fulfilled]:(state,action)=>{
            state.selectedMovie = action.payload;
        }
    }
});

const {reducer: moviesReducer, actions: { nextPage, prevPage, setGenres}} = MoviesSlice;

const moviesActions = {
    getPopularMovies,
    setMovie,
    getTrailer,
    getTrendingMovies,
    getTrendingTV,
    getConcreteMovies,
    nextPage,
    prevPage,
    getGenres,
    setGenres,

}

export {
    moviesReducer,
    moviesActions
}

