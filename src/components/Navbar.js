// src/components/Navbar.js
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      history.push(`/search/${searchQuery}`)
      setSearchQuery('')
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        movieDB
      </Link>
      <div className="nav-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar
