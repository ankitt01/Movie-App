//reducer used to update the state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        //actions
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
})

//exporting actions
export const {addMovies} = movieSlice.actions;

//function to fetch from the store
export const getAllMovies = (state) => state.movies.movies

//exporting reducer
export default movieSlice.reducer