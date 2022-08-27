import { useQuery } from 'react-query'
import { getMovie } from '../services/TheMovieAPI'

const useMovie = (id, page) => {
    return useQuery(['movie', id, page], getMovie, {
        keepPreviousData: true,
    })
}

export default useMovie