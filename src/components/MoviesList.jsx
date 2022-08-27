import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies, page, total_pages, on_prev, on_next }) => {

    return (

        <>
            <Row>
                {movies.map(movie => (
                    <Col lg={3} md={4} sm={6} key={movie.id}>
                        <Card className="mb-4">
                            <Card.Img className='img-fluid' variant="top" src={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : 'https://ik.imagekit.io/hfbs99aazxg/tr:di-no_poster_available.svg/nophoto.jpg?ik-sdk-version=angular-1.0.2'} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    <Button variant="secondary" as={Link} to={`/movie/${movie.id}`}>More about movie...</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-between align-items-center text-center mt-4">
                <Button disabled={page === 1 ? true : false} onClick={on_prev} variant="primary">Previous Page</Button>

                <span>Page: {page}/{total_pages}</span>

                <Button disabled={page === total_pages ? true : false} onClick={on_next} variant="primary">Next Page</Button>
            </div>

        </>

    )
}

export default MoviesList