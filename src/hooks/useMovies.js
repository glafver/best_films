import { useQuery } from 'react-query'
import { getPopularMoviesByPeriod, getMoviesByType, getMoviesByGenre, getMoviesByActor, getSearchMovies } from '../services/TheMovieAPI'

const useMovies = (name, type, page) => {

    if (name === 'movies_by_period') {
        return useQuery(['movies', type, page], getPopularMoviesByPeriod, {
            keepPreviousData: true,
        })
    } else if (name === 'movies_by_type') {
        return useQuery(['movies', type, page], getMoviesByType, {
            keepPreviousData: true,
        })
    } else if (name === 'movies_by_genre') {
        return useQuery(['movies', type, page], getMoviesByGenre, {
            keepPreviousData: true,
        })
    } else if (name === 'actor_movies') {
        return useQuery(['movies', type, page], getMoviesByActor, {
            keepPreviousData: true,
        })
    } else if (name === 'search') {
        return useQuery(['search_movies', type, page], getSearchMovies, {
            enabled: !!type,
        })
    }
}

export default useMovies