import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const SimilarMoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id, page], getMovie)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>Similar films to <b>{data.title}</b>:</p>

                    <p>We found <b>{data.similar.total_results}</b> films:</p>

                    <MoviesList movies={data.similar.results} page={page} total_pages={data.similar.total_pages}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}

        </Container>
    )
}

export default SimilarMoviesPage