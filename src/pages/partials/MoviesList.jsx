import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {

    return (

        <>
            <Row>
                {movies.map(movie => (
                    <Col lg={3} md={4} sm={6} key={movie.id}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
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
        </>

    )
}

export default MoviesList