import { useEffect } from "react";

const useLocalStorage = (data, id) => {

    useEffect(() => {
        if (data) {
            let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []
            movies = movies.filter(function (item) { return item.id !== id })
            movies.unshift({ id: id, title: data.title, src: data.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : 'https://ik.imagekit.io/hfbs99aazxg/tr:di-no_poster_available.svg/nophoto.jpg?ik-sdk-version=angular-1.0.2' })
            movies = movies.slice(0, 10)
            localStorage.setItem('movies', JSON.stringify(movies))
        }
    }, [data])
}

export default useLocalStorage