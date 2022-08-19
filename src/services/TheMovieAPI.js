import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"

// const requestOptions = {
//     headers: {
//         'X-RapidAPI-Key': 'dc49790c9ba2bc8597afe9c806b9bac1',
//         'X-RapidAPI-Host': 'api.themoviedb.org/3',
//     }
// }

export const getTrendingFilmsWeek = async () => {

    const response = await axios.get(`/trending/movie/week?api_key=${import.meta.env.VITE_THE_MOVIE_API_KEY}`)

    return response.data
}

export default {
    getTrendingFilmsWeek
}