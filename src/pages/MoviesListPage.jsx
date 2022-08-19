import React from 'react'
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getMoviesListByType } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const MoviesListPage = () => {

    const { type } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies', type], getMoviesListByType)

    return (
        <Container>

            <div>
                <p>Welcome to Movies List</p>
            </div>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
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

export default MoviesListPage