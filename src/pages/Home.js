// src/pages/Home.js
import {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [page])

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <div className="pagination">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ⬅ Prev
        </button>
        <span>Page {page}</span>
        <button type="button" onClick={() => setPage(page + 1)}>
          Next ➡
        </button>
      </div>
    </div>
  )
}

export default Home
