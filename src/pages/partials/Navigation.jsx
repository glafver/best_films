import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import popcorn from '../../assets/icons/favicon.svg'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						alt="popcorn"
						src={popcorn}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					Best Films
				</Navbar.Brand>

			</Container>
		</Navbar>
	)
}

export default Navigation
