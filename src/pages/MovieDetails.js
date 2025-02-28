import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const API_KEY = process.env.REACT_APP_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>⭐ {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieDetails
