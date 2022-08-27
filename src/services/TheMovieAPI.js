import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"

// needs the api key v3

const api_key = import.meta.env.VITE_THE_MOVIE_API_KEY

// get movies by type (now_playing, popular? top_rated)
export const getMoviesByType = async ({ queryKey }) => {

    const [_key, type, page] = queryKey

    const response = await axios.get(`/movie/${type}?api_key=${api_key}&region=se&include_adult=false&page=${page}`)

    return response.data
}

// get a list of genres of movies
export const getGenres = async () => {

    const response = await axios.get(`/genre/movie/list?api_key=${api_key}`)

    return response.data
}

// get movies based on genre
export const getMoviesByGenre = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/discover/movie?api_key=${api_key}&include_adult=false&page=${page}&with_genres=${id}`)

    return response.data
}

// get one movie with credits and similar movies
export const getMovie = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/movie/${id}?api_key=${api_key}&append_to_response=credits,similar&page=${page}`)

    return response.data
}

// get actor with films (but without pages)
export const getActor = async ({ queryKey }) => {

    const [_key, id] = queryKey

    const response = await axios.get(`/person/${id}?api_key=${api_key}&append_to_response=credits`)

    return response.data
}

// get list of movies with actor (with pages)
export const getMoviesByActor = async ({ queryKey }) => {

    const [_key, id, page] = queryKey

    const response = await axios.get(`/discover/movie?api_key=${api_key}&include_adult=false&page=${page}&with_people=${id}`)

    return response.data
}

// get the trending movies of the day or week
export const getPopularMoviesByPeriod = async ({ queryKey }) => {

    const [_key, period, page] = queryKey

    const response = await axios.get(`/trending/movie/${period}?api_key=${api_key}&page=${page}`)

    return response.data
}

// searching movies by query
export const getSearchMovies = async ({ queryKey }) => {

    const [_key, query, page] = queryKey

    const response = await axios.get(`/search/movie?api_key=${api_key}&query=${query}&page=${page}&include_adult=false`)

    return response.data
}


export default {
    getMoviesByType,
    getGenres,
    getMoviesByGenre,
    getMovie,
    getActor,
    getMoviesByActor,
    getPopularMoviesByPeriod,
    getSearchMovies
}