import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMoviesByType } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const TypeMoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { type } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies', type, page], getMoviesByType)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found <b>{data.total_results}</b> films:</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}

        </Container>
    )
}

export default TypeMoviesPage