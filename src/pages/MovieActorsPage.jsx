import React from 'react'
import { Container } from 'react-bootstrap'
import { getMovie } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ActorsList from './partials/ActorsList'

const ActorsPage = () => {

    const page = 1

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id, page], getMovie)

    return (
        <Container>

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