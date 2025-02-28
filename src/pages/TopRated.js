import React, {useEffect, useState} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const TopRated = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
        )
        const data = await response.json()
        if (data.results) {
          setMovies(data.results)
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <div>
      <h1>movieDB</h1>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p className="rating">Rating: {movie.vote_average}</p>
              <button className="details-btn">View Details</button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default TopRated
