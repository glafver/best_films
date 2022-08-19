import React from 'react'
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getGenres } from '../services/TheMovieAPI'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'

const GenresPage = () => {

    const { data, error, isError, isLoading, isSuccess } = useQuery(['genres'], getGenres)

    return (
        <Container>

            <div>
                <p>Choose films by genre:</p>
            </div>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <ListGroup>
                        {data.genres.map((genre, i) => (
                            <ListGroupItem as={Link} key={i} to={`movies/${genre.id}`}  >
                                <p>{genre.name}</p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>

                </>
            )
            }

        </Container >
    )
}

export default GenresPage