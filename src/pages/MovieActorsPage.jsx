import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import ActorCard from './partials/ActorCard'

const ActorsPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id], getMovie)

    // const [actors, setActors] = useState()

    // useEffect(() => {
    //     console.log("test effect", data)
    //     const actors = data.credits.cast.filter((person) => {
    //         if (person.known_for_department === 'Acting') {
    //             return true
    //         }
    //     })
    //     setActors(actors)
    // }, [data])

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (

                <>
                    <div>
                        <p>Actors from <b>{data.title}</b></p>
                        {/* <p>{actors[1].name}</p> */}
                    </div>

                    <Row>
                        {data.credits.cast.map(actor => (
                            <Col lg={3} md={4} sm={6} key={actor.id}>
                                <ActorCard actor={actor} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    )
}

export default ActorsPage