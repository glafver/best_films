import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMoviesByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const GenreMoviesPage = () => {

    const navigate = useNavigate()

    const { genre_id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', genre_id], getMoviesByGenre)

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

export default GenreMoviesPage