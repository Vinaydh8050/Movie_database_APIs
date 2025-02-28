import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const SearchResults = () => {
  const {query} = useParams()
  const [movies, setMovies] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [query])

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.vote_average}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
