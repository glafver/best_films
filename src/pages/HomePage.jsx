import React, { useEffect, useState, useRef } from 'react'
import { Container, Form, Button, InputGroup } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { getSearchMovies } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'
import LastFilms from './partials/LastFilms'
import MoviesList from './partials/MoviesList'

const HomePage = () => {

	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : null
	const query = searchParams.get('query') ?? null

	const [searchInput, setSearchInput] = useState('')
	const searchInputRef = useRef()

	const { data, error, isError, isLoading, isSuccess } = useQuery(['search_movies', query, page], getSearchMovies, {
		enabled: !!query,
	})

	const handleSubmit = async e => {
		e.preventDefault()
		if (!searchInput.length) {
			return
		}
		setSearchParams({ query: searchInput, page: 1 })
		setSearchInput('')
	}

	useEffect(() => {
		searchInputRef.current.focus()
	}, [])

	return (
		<Container className='films_page_container'>

			<div>
				<p>Welcome to Best Films!</p>
			</div>

			<Form onSubmit={handleSubmit}>
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

					<MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
						on_prev={() => setSearchParams({ query, page: page - 1 })} on_next={() => setSearchParams({ query, page: page + 1 })} />
				</>
			)}

			<LastFilms />

		</Container>

	)
}

export default HomePage
