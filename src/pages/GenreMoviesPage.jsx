import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { getMoviesByGenre } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import MoviesList from './partials/MoviesList'

const GenreMoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null

    const { genre } = useParams()

    const id = parseInt(genre.split("_")[0])
    const genre_name = genre.split("_")[1]

    const { data, error, isError, isLoading, isSuccess } = useQuery(['movies_by_genre', id, page], getMoviesByGenre)
    console.log(data)

    return (
        <Container>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <p>{id}</p>
                    <p>We found {data.total_results} films in <b>{genre_name} </b>genre:</p>

                    <MoviesList movies={data.results} />

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <Button
                            disabled={page === 1 ? true : false}
                            onClick={() => setSearchParams({ page: page - 1 })}
                            variant="primary"
                        >Previous Page</Button>

                        <span>Page: {page}/{data.total_pages}</span>

                        <Button
                            disabled={page === parseInt(data.total_results) ? true : false}
                            onClick={() => setSearchParams({ page: page + 1 })}
                            variant="primary"
                        >Next Page</Button>
                    </div>
                </>
            )}

        </Container>
    )
}

export default GenreMoviesPage