import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Form, Button, InputGroup } from 'react-bootstrap'
import LastFilms from './partials/LastFilms'
import MoviesList from '../components/MoviesList'
import useMovies from '../hooks/useMovies'

const HomePage = () => {

	const [searchParams, setSearchParams] = useSearchParams({ page: 1, query: '' })

	const [searchInput, setSearchInput] = useState('')

	const page = parseInt(searchParams.get('page'))

	const query = searchParams.get('query')

	const searchInputRef = useRef()

	const { data, error, isError, isLoading, isSuccess } = useMovies('search', query, page)

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
					{data.results.length === 0 && <p>No films matching your search.</p>}
					{data.results.length > 0 &&
						<MoviesList movies={data.results} page={page} total_pages={parseInt(data.total_pages)}
							on_prev={() => setSearchParams({ query, page: page - 1 })} on_next={() => setSearchParams({ query, page: page + 1 })}
						/>}

				</>
			)}

			<LastFilms />

		</Container>

	)
}

export default HomePage
