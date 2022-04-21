import { configureStore } from "@reduxjs/toolkit";
//import reducer
import moviesReducer from "./movies/movieSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    
})