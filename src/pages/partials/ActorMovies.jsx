import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ActorMovies = ({ movies }) => {

    const { id } = useParams()

    return (
        <>

            {movies.slice(0, 10).map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>{movie.title}, </Link>
            ))
            }

            <Link className='text-secondary' to={`/actor/${id}/movies`}>more movies...</Link>

        </>

    )
}

export default ActorMovies