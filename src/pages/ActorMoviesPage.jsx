import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getActorMovies } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { Container, Button } from 'react-bootstrap'
import MoviesList from './partials/MoviesList'

const ActorPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { id } = useParams()
    const { data, error, isError, isLoading, isSuccess } = useQuery(['actor_movies', id, page], getActorMovies)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    {/* <p>Movies with actor {id}</p> */}

                    <p>We found <b>{data.total_results}</b> films:</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}

        </Container>
    )
}

export default ActorPage