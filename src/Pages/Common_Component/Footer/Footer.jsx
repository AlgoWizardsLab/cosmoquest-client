import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>CosmoQuest</h5>
            <p>Explore the universe, from the Big Bang to the stars.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/explore" className="text-light text-decoration-none">Explore</Link></li>
              <li><Link to="/timeline" className="text-light text-decoration-none">Timeline</Link></li>
              <li><Link to="/quiz" className="text-light text-decoration-none">Quiz</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Follow Us</h6>
            <p>Stay updated with the latest discoveries.</p>
            <div className="d-flex gap-3">
              <a href="https://twitter.com" className="text-light text-decoration-none">Twitter</a>
              <a href="https://youtube.com" className="text-light text-decoration-none">YouTube</a>
              <a href="https://instagram.com" className="text-light text-decoration-none">Instagram</a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} CosmoQuest. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
