import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import ActorsList from './partials/ActorsList'

const ActorsPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id], getMovie)

    return (
        <Container>

            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3"> ⟪ Back</Button>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (

                <>
                    <div>
                        <p>Actors from <b>{data.title}</b></p>
                    </div>

                    <ActorsList cast={data.credits.cast} />
                </>
            )}
        </Container>
    )
}

export default ActorsPage