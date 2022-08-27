import React, { useEffect } from "react"
import { Image, Row, Col, Container, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import MovieActors from './partials/MovieActors'
import MovieSimilar from './partials/MovieSimilar'
import LastFilms from "./partials/LastFilms"
import useMovie from "../hooks/useMovie"


const MoviePage = () => {

    const navigate = useNavigate()

    const page = 1

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useMovie(id, page)

    useEffect(() => {
        if (data) {
            let movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []
            movies = movies.filter(function (item) { return item.id !== id })
            movies.unshift({ id: id, title: data.title, src: data.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg' })
            movies = movies.slice(0, 10)
            localStorage.setItem('movies', JSON.stringify(movies))
        }
    }, [data])

    return (
        <Container className='films_page_container'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <Button className="my-4 btn btn-secondary" onClick={() => navigate(-1)}>Back</Button>

                    <Row>
                        <Col md={6} sm={12}>
                            <Image className='mx-auto img-fluid' src={data.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
                        </Col>
                        <Col md={6} sm={12}>
                            <h1>{data.title}</h1>
                            <p><span className='h4'>Release date: </span>{data.release_date}</p>
                            <p><span className='h4'>Budget: </span>$ {data.budget}</p>
                            <p><span className='h4'>Overview: </span>{data.overview}</p>
                            <p><span className='h4'>Actors: </span><MovieActors cast={data.credits.cast} /></p>
                            <p><span className='h4'>Similar Films: </span><MovieSimilar movies={data.similar.results} /></p>
                        </Col>
                    </Row>
                </>
            )}

            <LastFilms />

        </Container>

    )
}

export default MoviePage