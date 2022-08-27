import React from 'react'
import { Image, Row, Col, Container, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import ActorMovies from './partials/ActorMovies'
import LastFilms from './partials/LastFilms'
import useActor from '../hooks/useActor'

const ActorPage = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const { data: actor, error, isError, isLoading, isSuccess } = useActor(id)

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <Button className="my-4 btn btn-secondary" onClick={() => navigate(-1)}>Back</Button>

                    <Row>
                        <Col md={6} sm={12} >
                            <Image className='mx-auto img-fluid' src={actor.profile_path != null ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
                        </Col>
                        <Col md={6} sm={12}>
                            <h1>{actor.name}</h1>
                            <p><span className='h4'>Date of birth: </span>{actor.birthday}</p>
                            <p><span className='h4'>Biography: </span>{actor.biography}</p>
                            <p><span className='h4'>Films with actor: </span><ActorMovies movies={actor.credits.cast} name={actor.name} /></p>
                        </Col>
                    </Row>
                </>
            )}

            <LastFilms />

        </Container>

    )
}

export default ActorPage