import React from 'react'
import { Container } from 'react-bootstrap'

const HomePage = () => {

	return (
		<Container>

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
			</Form> */}

		</Container>

	)
}

export default HomePage
