import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import GenresPage from './pages/GenresPage'
import TypeMoviesPage from './pages/TypeMoviesPage'
import GenreMoviesPage from './pages/GenreMoviesPage'
import MovieActorsPage from './pages/MovieActorsPage'
import ActorMoviesPage from './pages/ActorMoviesPage'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'

function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies/:type" element={<TypeMoviesPage />} />

        <Route path="/movie/:id/actors" element={<MovieActorsPage />} />

        <Route path="/actor/:id/movies" element={<ActorMoviesPage />} />

        <Route path="/genres" element={<GenresPage />} />

        <Route path="/genres/:id/movies" element={<GenreMoviesPage />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <ReactQueryDevtools position='bottom-left' />
    </div>
  )
}

export default App
