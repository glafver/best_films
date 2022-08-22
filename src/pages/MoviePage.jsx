import React from 'react'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { Image, Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MovieActors from './partials/MovieActors'
import MovieSimilar from './partials/MovieSimilar'

const MoviePage = () => {

    const page = 1

    const { id } = useParams()
    const { data: movie, error, isError, isLoading, isSuccess } = useQuery(['movie', id, page], getMovie)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <Row>
                        <Col md={6} sm={12}>
                            <Image className='mx-auto fluid' src={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
                        </Col>
                        <Col md={6} sm={12}>
                            <h1>{movie.title}</h1>
                            <p><span className='h4'>Release date: </span>{movie.release_date}</p>
                            <p><span className='h4'>Budget: </span>$ {movie.budget}</p>
                            <p><span className='h4'>Overview: </span>{movie.overview}</p>
                            <p><span className='h4'>Actors: </span><MovieActors cast={movie.credits.cast} /></p>
                            <p><span className='h4'>Similar Films: </span><MovieSimilar movies={movie.similar.results} /></p>
                        </Col>
                    </Row>
                </>
            )}

        </Container>

    )
}

export default MoviePage