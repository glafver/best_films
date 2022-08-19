import React from 'react'
import { Container, ListGroupItem, ListGroup } from 'react-bootstrap'
import { getTrendingFilmsWeek } from '../services/TheMovieAPI'
import { useQuery } from 'react-query'


const HomePage = () => {

	const { data, error, isError, isLoading, isSuccess } = useQuery(['films'], getTrendingFilmsWeek)

	return (
		<Container>

			<div>
				<p>Welcome to Best Films Home Page!</p>
			</div>

			{isLoading && <p>Loading...</p>}

			{isError && <p>{error.message}</p>}

			{isSuccess && (
				<>
					<ListGroup>
						{data.results.map((film, i) => (
							<ListGroupItem key={i}>
								<p>{film.title}</p>
							</ListGroupItem>
						))}
					</ListGroup>

				</>
			)}

		</Container>

	)
}

export default HomePage
