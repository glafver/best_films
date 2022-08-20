import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ActorCard = ({ actor }) => {

	return (

		<Card className="mb-4">
			<Card.Img variant="top" src={actor.profile_path != null ? 'https://image.tmdb.org/t/p/w500/' + actor.profile_path : 'https://artbunny.ru/wp-content/uploads/2014/11/placeholder.jpg'} />
			<Card.Body>
				<Card.Title>{actor.name}</Card.Title>
				<Card.Text>
					<Link className='h5' to={`/actor/${actor.id}/movies`}>Films with actor</Link>
				</Card.Text>
			</Card.Body>
		</Card>

	)
}

export default ActorCard
