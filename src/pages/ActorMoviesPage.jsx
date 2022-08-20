import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getActorMovies } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { Container, Button } from 'react-bootstrap'
import MoviesList from './partials/MoviesList'

const ActorPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const { data, error, isError, isLoading, isSuccess } = useQuery(['actor_movies', id], getActorMovies)

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            <div>

            </div>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>Movies with actor {id}</p>

                    <MoviesList movies={data.results} />
                </>
            )}

        </Container>
    )
}

export default ActorPage