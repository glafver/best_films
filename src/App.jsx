import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import TypeMoviesPage from './pages/TypeMoviesPage'
import GenreMoviesPage from './pages/GenreMoviesPage'
import MovieActorsPage from './pages/MovieActorsPage'
import ActorMoviesPage from './pages/ActorMoviesPage'
import SimilarMoviesPage from './pages/SimilarMoviesPage'
import TrendingMoviesPage from './pages/TrendingMoviesPage'
import ActorPage from './pages/ActorPage'
import MoviePage from './pages/MoviePage'
// import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'

function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies/:type" element={<TypeMoviesPage />} />

        <Route path="/movies/trending/:timeline" element={<TrendingMoviesPage />} />

        <Route path="/movie/:id" element={<MoviePage />} />

        <Route path="/movie/:id/actors" element={<MovieActorsPage />} />

        <Route path="/movie/:id/similar" element={<SimilarMoviesPage />} />

        <Route path="/actor/:id" element={<ActorPage />} />

        <Route path="/actor/:id/:name/movies" element={<ActorMoviesPage />} />

        <Route path="/genres/:id/:genre/movies" element={<GenreMoviesPage />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      {/* <ReactQueryDevtools position='bottom-left' /> */}
    </div>
  )
}

export default App
