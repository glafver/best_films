import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import popcorn from '../../assets/icons/favicon.svg'
import { useQuery } from 'react-query'
import { getGenres } from '../../services/TheMovieAPI'

const Navigation = () => {

	const { data, error, isError, isLoading, isSuccess } = useQuery(['genres'], getGenres)

	return (
		<Navbar bg="dark" variant="dark" expand="md" className='mb-4'>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						alt="popcorn"
						src={popcorn}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/> Best Films</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="movies/now_playing">Now in cinema 📽️</Nav.Link>

						<NavDropdown title="Popular films" id="basic-nav-dropdown">
							<NavDropdown.Item as={NavLink} to="movies/popular">All popular films</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={NavLink} to="movies/trending/day">Popular films of the day</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="movies/trending/week">Popular films of the week</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link as={NavLink} to="movies/top_rated">Top rated films 🏆</Nav.Link>

						<NavDropdown title="Genres 🎭" id="basic-nav-dropdown">
							{isSuccess &&
								data.genres.map((genre, i) => (
									<NavDropdown.Item as={Link} key={i} to={`genres/${genre.id}/${genre.name}/movies`}>{genre.name}</NavDropdown.Item>
								))
							}

						</NavDropdown>

					</Nav>
				</Navbar.Collapse>

			</Container>
		</Navbar >
	)
}

export default Navigation
