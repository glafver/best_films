import React from 'react'
import { Container } from 'react-bootstrap'
import { getMoviesByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import MoviesList from './partials/MoviesList'
import LastFilms from './partials/LastFilms'

const GenreMoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { id, genre } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', id, page], getMoviesByGenre, {
        keepPreviousData: true,
    })

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found <b>{data.total_results}</b> films in <b>{genre} </b>genre:</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />

                </>
            )}

            <LastFilms />

        </Container>
    )
}

export default GenreMoviesPage