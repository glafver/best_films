import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
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

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ReactQueryDevtools position='bottom-left' />
    </div>
  )
}

export default App
