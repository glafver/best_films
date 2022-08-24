import React from 'react'
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getGenres } from '../services/TheMovieAPI'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import LastFilms from './partials/LastFilms'

const GenresPage = () => {

    const { data, error, isError, isLoading, isSuccess } = useQuery(['genres'], getGenres)

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <div>
                        <p>Choose films by genre:</p>
                    </div>

                    <ListGroup>
                        {data.genres.map((genre, i) => (
                            <ListGroupItem as={Link} key={i} to={`${genre.id}_${genre.name}/movies`}  >
                                <p>{genre.name}</p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>

                </>
            )}

            <LastFilms />

        </Container >
    )
}

export default GenresPage