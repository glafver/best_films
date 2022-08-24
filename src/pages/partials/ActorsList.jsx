import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ActorsList = ({ cast }) => {

	const actors = cast.filter((person) => {
		if (person.known_for_department === 'Acting') {
			return true
		}
	})

	return (

		<Row>
			{actors.map(actor => (
				<Col lg={3} md={4} sm={6} key={actor.id}>
					<Card className="mb-4">
						<Card.Img variant="top" src={actor.profile_path != null ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
						<Card.Body>
							<Card.Title>{actor.name}</Card.Title>
							<Card.Text>
								<Button variant="secondary" as={Link} to={`/actor/${actor.id}`}>More about actor...</Button>
							</Card.Text>
						</Card.Body>
					</Card>

				</Col>
			))}
		</Row>

	)
}

export default ActorsList
