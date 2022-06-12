import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopular',
    async () => {
        const {data} = await moviesService.getPopular()
        return data;
    });


const getTrailer = createAsyncThunk(
    'moviesSlice/getTrailer',
    async ({id}) => {
        if (id !== undefined) {
            const {data} = await moviesService.getMovieByID(id)
            return data.videos.results;
        }
        return null;

    });


const initialState = {
    movies: [],
    popularMovies: [],
    selectedMovie: [],
    trailer: null
};

const MoviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.selectedMovie = action.payload;
            console.log(action.payload)
            console.log('done')
        }
    },
    extraReducers: {
        [getPopularMovies.fulfilled]: (state, action) => {
            state.popularMovies = action.payload;
            state.selectedMovie = action.payload.results[0];
        },

        [getTrailer.fulfilled]: (state, action) => {
            const trailer = action.payload.find(vid => vid.name === 'Official Trailer')
            if (trailer === undefined) {
                state.trailer = action.payload[0];
            }else{
                state.trailer = trailer;
            }
        }
    }
});

const {reducer: moviesReducer, actions: {setMovie}} = MoviesSlice;

const moviesActions = {
    getPopularMovies,
    setMovie,
    getTrailer
}

export {
    moviesReducer,
    moviesActions
}

