import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Container, ListGroup, ListGroupItem, Form, Button, InputGroup, Row, Col, Card } from 'react-bootstrap'
import { useSearchParams, Link } from 'react-router-dom'
import { getSearchMovies } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import LastFilms from './partials/LastFilms'

const HomePage = () => {

	// const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	// const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null
	// const query = searchParams.get('query') ?? ''

	// const { data, error, isError, isLoading, isSuccess } = useQuery(['search_movies', query, page], getSearchMovies)

	// const handleSearch = async query => {
	// 	setSearchParams({ query, page: 1 })
	// }

	// const [searchInput, setSearchInput] = useState('')
	// const searchInputRef = useRef()

	// const handleSubmit = async e => {
	// 	e.preventDefault()

	// 	if (!searchInput.length) {
	// 		return
	// 	}

	// 	handleSearch(searchInput)
	// }

	// useEffect(() => {
	// 	searchInputRef.current.focus()
	// }, [])

	// console.log(data)

	return (
		<Container className='films_page_container'>

			<div>
				<p>Welcome to Best Films!</p>
			</div>

			{/* <Form onSubmit={handleSubmit}>
				<InputGroup className="mb-3">
					<Form.Control
						aria-label="Search"
						onChange={e => setSearchInput(e.target.value)}
						placeholder="Enter movie title"
						ref={searchInputRef}
						required
						type="text"
						value={searchInput}
					/>
					<Button variant="success" type="submit" disabled={!searchInput.length}>Search</Button>
				</InputGroup>
			</Form>

			{isLoading && <p>Loading...</p>}

			{isError && <p>{error.message}</p>}

			{isSuccess && (
				<>
					<Row>
						{data.results.map(movie => (
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

					<div className="d-flex justify-content-between align-items-center mt-4">
						<Button disabled={page === 1 ? true : false} onClick={() => setSearchParams({ page: page - 1 })} variant="primary">Previous Page</Button>

						<span>Page: {page}/{parseInt(data.total_pages)}</span>

						<Button disabled={page === parseInt(data.total_pages) ? true : false} onClick={() => setSearchParams({ page: page + 1 })} variant="primary">Next Page</Button>
					</div>

				</>
			)} */}

			<LastFilms />

		</Container>

	)
}

export default HomePage
