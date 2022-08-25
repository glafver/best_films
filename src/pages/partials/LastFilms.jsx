import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LastFilms = () => {

    const [movies] = useState(localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [])

    return (
        <>
            <div className='films_footer text-center'>

                <p><b>Movies you've recently viewed:</b></p>
                <Row className='justify-content-center'>
                    {movies.length && movies.map((movie, i) => (
                        <Col className='text-center' xs={1} key={i} >
                            <Link to={`/movie/${movie.id}`}>
                                <Image className='mx-auto d-block w-100 img-thumbnail' src={movie.src} />
                            </Link>
                        </Col>
                    ))}
                </Row>

            </div>
        </>
    )
}

export default LastFilms