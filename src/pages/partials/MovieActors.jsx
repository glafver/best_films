import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieActors = ({ cast }) => {

    const { id } = useParams()

    const actors = cast.filter((person) => {
        if (person.known_for_department === 'Acting') {
            return true
        }
    }).slice(0, 10)

    return (
        <>

            {actors.map(actor => (
                <Link key={actor.id} to={`/actor/${actor.id}`}>{actor.name}, </Link>
            ))}

            <Link className='text-secondary' to={`/movie/${id}/actors`}>more actors...</Link>

        </>

    )
}

export default MovieActors