import React from 'react'
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const GenresMoviesPage = () => {

    const { genre_id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', genre_id], getByGenre)

    return (
        <Container>

            <div>
                <p>Welcome to <b>{genre_id}</b>  Movies List  </p>

            </div>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>

                    <p>We found {data.total_results} films in this category:</p>

                    <ListGroup>
                        {data.results.map((film, i) => (
                            <ListGroupItem key={i}>
                                <p>{film.title}</p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>

                </>
            )}

        </Container>
    )
}

export default GenresMoviesPage