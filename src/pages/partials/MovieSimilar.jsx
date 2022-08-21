import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieSimilar = ({ movies }) => {

    const { id } = useParams()

    return (
        <>

            {movies.slice(0, 10).map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>{movie.title}, </Link>
            ))
            }

            <Link className='text-secondary' to={`/movie/${id}/similar`}>more movies...</Link>

        </>

    )
}

export default MovieSimilar