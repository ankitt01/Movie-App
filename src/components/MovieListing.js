import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movies/movieSlice'
import MovieCard from './MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  let renderMovies = "";

  renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  return (
    <div>
      <h2 className='my-4 text-3xl text-font-secondary'>Movies</h2>
      <div className='movie-container'>
        {renderMovies}
      </div>
    </div>
  )
}

export default MovieListing