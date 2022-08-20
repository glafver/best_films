import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const GenresMoviesPage = () => {

    const navigate = useNavigate()

    const { genre_id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', genre_id], getByGenre)

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found {data.total_results} films in <b>{genre_id}</b>genre:</p>

                    <MoviesList movies={data.results} />

                </>
            )}

        </Container>
    )
}

export default GenresMoviesPage