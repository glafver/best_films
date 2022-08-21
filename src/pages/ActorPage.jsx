import React from 'react'
import { getActor } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { Image, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ActorMovies from './partials/ActorMovies'

const ActorPage = () => {

    const { id } = useParams()
    const { data: actor, error, isError, isLoading, isSuccess } = useQuery(['actor', id], getActor)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <Row>
                        <Col md={6} sm={12} >
                            <Image className='mx-auto fluid' src={actor.profile_path != null ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
                        </Col>
                        <Col md={6} sm={12}>
                            <h1>{actor.name}</h1>
                            <p><span className='h4'>Date of birth: </span>{actor.birthday}</p>
                            <p><span className='h4'>Biography: </span>{actor.biography}</p>
                            <p><span className='h4'>Films with actor: </span><ActorMovies movies={actor.credits.cast} /></p>
                        </Col>
                    </Row>
                </>
            )}

        </Container>

    )
}

export default ActorPage