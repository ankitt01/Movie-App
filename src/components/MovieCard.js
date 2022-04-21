import React from 'react'

const MovieCard = ({data}) => {
  return (
    <div>
      <div>
        <img src={data.Poster} alt="poster" />
      </div>
      <div>
        <h1>{data.Title}</h1>
        <p>{data.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard