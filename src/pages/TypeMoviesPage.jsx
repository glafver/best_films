import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MoviesList from '../components/MoviesList'
import LastFilms from './partials/LastFilms'
import useMovies from '../hooks/useMovies'

const TypeMoviesPage = () => {

    const { type } = useParams()

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

    const page = parseInt(searchParams.get('page'))

    const { data, error, isError, isLoading, isSuccess } = useMovies('movies_by_type', type, page)

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found <b>{data.total_results} </b>
                        {type === 'popular' && <span> popular </span>}
                        {type === 'top_rated' && <span> top rated </span>}
                        films
                        {type === 'now_playing' && <span> in the cinema now</span>}
                        :</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}

            <LastFilms />

        </Container>
    )
}

export default TypeMoviesPage