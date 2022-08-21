import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMoviesByType } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const TypeMoviesPage = () => {

    const navigate = useNavigate()

    const { type } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies', type], getMoviesByType)

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

export default TypeMoviesPage