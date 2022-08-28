import React from "react"
import { Image, Row, Col, Container, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import MovieActors from '../components/MovieActors'
import MovieSimilar from '../components/MovieSimilar'
import LastFilms from "./partials/LastFilms"
import useMovie from "../hooks/useMovie"
import useLocalStorage from "../hooks/useLocalStorage"


const MoviePage = () => {

    const navigate = useNavigate()

    const page = 1

    const { id } = useParams()

    const { data, error, isError, isLoading, isSuccess } = useMovie(id, page)

    useLocalStorage(data, id)

    return (
        <Container className='films_page_container d-flex flex-column align-items-center'>

            {isLoading && <p>Loading...</p>}

            {isError && <p>{error.message}</p>}

            {isSuccess && (
                <>
                    <Button className="my-4 btn btn-secondary align-self-start" onClick={() => navigate(-1)}>Back</Button>

                    <Row>
                        <Col md={6} sm={12}>
                            <Image className='mx-auto img-fluid' src={data.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + data.poster_path : 'https://ik.imagekit.io/hfbs99aazxg/tr:di-no_poster_available.svg/nophoto.jpg?ik-sdk-version=angular-1.0.2'} />
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