import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import MoviesListPage from './pages/MoviesListPage'
import GenresMoviesPage from './pages/GenresMoviesPage'
import GenresPage from './pages/GenresPage'
import PageNotFound from './pages/PageNotFound'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'

function App() {

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies/:type" element={<MoviesListPage />} />

        <Route path="/genres" element={<GenresPage />} />

        <Route path="/genres/movies/:genre_id" element={<GenresMoviesPage />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <ReactQueryDevtools position='bottom-left' />
    </div>
  )
}

export default App
