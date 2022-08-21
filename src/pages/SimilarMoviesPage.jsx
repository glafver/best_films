import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const SimilarMoviesPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id], getMovie)

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>Similar films to <b>{data.title}</b>:</p>

                    <MoviesList movies={data.similar.results} />
                </>
            )}

        </Container>
    )
}

export default SimilarMoviesPage