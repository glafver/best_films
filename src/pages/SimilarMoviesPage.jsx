import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'
import MoviesList from '../components/MoviesList'
import LastFilms from './partials/LastFilms'
import useMovie from '../hooks/useMovie'

const SimilarMoviesPage = () => {

    const { id } = useParams()

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

    const page = parseInt(searchParams.get('page'))

    const { data, error, isError, isLoading, isSuccess } = useMovie(id, page)

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>Similar films to <b>{data.title}</b>:</p>

                    <p>We found <b>{data.similar.total_results}</b> films:</p>

                    <MoviesList movies={data.similar.results} page={page} total_pages={data.similar.total_pages}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}
            <LastFilms />
        </Container>
    )
}

export default SimilarMoviesPage