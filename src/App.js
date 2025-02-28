import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'
import './styles.css'
import './App.css'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/search/:query" component={SearchResults} />
    </Switch>
  </>
)

export default App
