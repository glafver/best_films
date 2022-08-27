import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ActorsList from '../components/ActorsList'
import LastFilms from './partials/LastFilms'
import useMovie from "../hooks/useMovie"

const ActorsPage = () => {

    const page = 1

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useMovie(id, page)

    return (
        <Container className='films_page_container'>

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

            <LastFilms />

        </Container>
    )
}

export default ActorsPage