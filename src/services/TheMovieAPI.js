import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"

// const requestOptions = {
//     headers: {
//         'X-RapidAPI-Key': '',
//         'X-RapidAPI-Host': 'api.themoviedb.org/3',
//     }
// }

export const getMoviesByType = async ({ queryKey }) => {

    const [_key, type, page] = queryKey

    const response = await axios.get(`/movie/${type}?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&region=se&include_adult=false&page=${page}`)

    return response.data
}

export const getGenres = async () => {

    const response = await axios.get(`/genre/movie/list?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}`)

    return response.data
}

export const getMoviesByGenre = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/discover/movie?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${id}`)

    return response.data
}

export const getMovie = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/movie/${id}?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&append_to_response=credits,similar&page=${page}`)

    return response.data
}

export const getActor = async ({ queryKey }) => {

    const [_key, id] = queryKey

    const response = await axios.get(`/person/${id}?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&append_to_response=credits`)

    return response.data
}

export const getActorMovies = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/discover/movie?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&with_people=${id}`)

    return response.data
}

export const getPopularMoviesTimeline = async () => {

    const response = await axios.get(`/trending/movie/week?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}`)

    return response.data
}

export default {
    getMoviesByType,
    getGenres,
    getMoviesByGenre,
    getMovie,
    getActor,
    getActorMovies,
    getPopularMoviesTimeline,
}