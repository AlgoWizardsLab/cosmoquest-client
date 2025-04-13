import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">CosmoQuest</Navbar.Brand>
        <Navbar.Toggle aria-controls="cosmo-navbar" />
        <Navbar.Collapse id="cosmo-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Explore Universe" id="explore-dropdown">
              <NavDropdown.Item as={Link} to="/explore">All Topics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/stars">Stars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/galaxies">Galaxies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/black-holes">Black Holes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/explore/planets">Planets</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/timeline">Timeline</Nav.Link>
            <Nav.Link as={Link} to="/star-map">Star Map</Nav.Link>
            <Nav.Link as={Link} to="/articles">Learn</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
