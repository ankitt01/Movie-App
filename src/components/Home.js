import { useEffect } from 'react'
import MovieListing from './MovieListing'
import MovieApi from '../common/apis/MovieApi'
import {APIKey} from '../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()
  const searchText = "Harry"
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${searchText}&type=movie`)
      .catch(err => {
        console.log(err);
      })
      //dispatching action
      dispatch(addMovies(response.data));
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