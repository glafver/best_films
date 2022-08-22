import React from 'react'
import { Container } from 'react-bootstrap'
import { getMoviesByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const GenreMoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { genre } = useParams()

    const id = parseInt(genre.split("_")[0])
    const genre_name = genre.split("_")[1]

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', id, page], getMoviesByGenre)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found <b>{data.total_results}</b> films in <b>{genre_name} </b>genre:</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />

                </>
            )}

        </Container>
    )
}

export default GenreMoviesPage