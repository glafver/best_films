import { Container } from 'react-bootstrap'
import LastFilms from './partials/LastFilms'

const PageNotFound = () => {
	return (
		<Container className="films_page_container">
			Page can not be found.
			<LastFilms />
		</Container>
	)
}

export default PageNotFound
