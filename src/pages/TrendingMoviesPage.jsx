import React from 'react'
import { Container } from 'react-bootstrap'
import { getPopularMoviesTimeline } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useLocation, useSearchParams } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const TrendingMoviesPage = () => {

    const location = useLocation()
    const timeline = location.pathname.replace("/movies/popular/", "")

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_timeline', timeline, page], getPopularMoviesTimeline)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>We found <b>{data.total_results}</b> popular films of the <b>{timeline}</b>:</p>

                    <MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
                        on_prev={() => setSearchParams({ page: page - 1 })} on_next={() => setSearchParams({ page: page + 1 })} />
                </>
            )}

        </Container>
    )
}

export default TrendingMoviesPage