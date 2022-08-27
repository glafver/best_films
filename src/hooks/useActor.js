import { useQuery } from 'react-query'
import { getActor } from '../services/TheMovieAPI'

const useActor = (id) => {
    return useQuery(['actor', id], getActor)
}

export default useActor