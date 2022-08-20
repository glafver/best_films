import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"

// const requestOptions = {
//     headers: {
//         'X-RapidAPI-Key': '',
//         'X-RapidAPI-Host': 'api.themoviedb.org/3',
//     }
// }

export const getMoviesListByType = async ({ queryKey }) => {

    const [_key, type] = queryKey

    const response = await axios.get(`/movie/${type}?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&region=se`)

    return response.data
}

export const getGenres = async () => {

    const response = await axios.get(`/genre/movie/list?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}`)

    return response.data
}

export const getMovie = async ({ queryKey }) => {

    const [_key, id] = queryKey

    const response = await axios.get(`/movie/${id}?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&append_to_response=similar,credits`)

    return response.data
}

export const getActorMovies = async ({ queryKey }) => {

    const [_key, id] = queryKey

    const response = await axios.get(`discover/movie?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&with_people=${id}`)

    return response.data
}

export const getByGenre = async ({ queryKey }) => {

    const [_key, genre_id] = queryKey

    const response = await axios.get(`/discover/movie?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${genre_id}`)

    return response.data
}

export const getTrendingFilmsWeek = async () => {

    const response = await axios.get(`/trending/movie/week?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}`)

    return response.data
}

export default {
    getTrendingFilmsWeek,
    getMoviesListByType,
    getGenres,
    getByGenre,
    getMovie,
    getActorMovies
}