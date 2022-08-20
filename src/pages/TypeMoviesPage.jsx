import React from 'react'
import { Container, Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getMoviesListByType } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate, Link } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const MoviesListPage = () => {

    const navigate = useNavigate()

    const { type } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies', type], getMoviesListByType)

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>Here are {type} films:</p>

                    <MoviesList movies={data.results} />
                </>
            )}

        </Container>
    )
}

export default MoviesListPage