import { useEffect } from 'react'
import MovieListing from './MovieListing'
import MovieApi from '../common/apis/MovieApi'
import {APIKey} from '../common/apis/MovieApiKey'

const Home = () => {
console.log(APIKey)
  useEffect(() => {
    const searchText = "Harry"
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${searchText}&type=movie`)
      .catch(err => {
        console.log(err);
      })
      console.log(response)
    }
    fetchMovies();
  },[])
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <MovieListing />
    </div>
  )
}

export default Home