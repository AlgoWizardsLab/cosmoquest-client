import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5" style={{ backgroundImage: 'url(/your-universe-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container>
          <h1 className="display-4 fw-bold">Discover the Cosmos</h1>
          <p className="lead">Explore stars, galaxies, black holes, and the mystery of the Big Bang.</p>
          <Button as={Link} to="/explore" variant="primary">Start Exploring</Button>
        </Container>
      </div>

      {/* About the Universe */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2>About the Universe</h2>
            <p>The universe began with the Big Bang 13.8 billion years ago. From that moment, stars and galaxies formed, leading to the cosmos we observe today.</p>
            <Button as={Link} to="/explore" variant="dark">Explore More</Button>
          </Col>
          <Col md={6}>
            <img src="/bigbang.png" alt="Big Bang" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Explore Categories */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-4">Explore Categories</h2>
        <Row className="g-4">
          {['Stars', 'Galaxies', 'Black Holes', 'Planets', 'Dark Matter'].map(topic => (
            <Col key={topic} md={4}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>{topic}</Card.Title>
                  <Card.Text>Learn about {topic.toLowerCase()} and their role in the universe.</Card.Text>
                  <Button as={Link} to={`/explore/${topic.toLowerCase().replace(" ", "-")}`} variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Timeline Preview */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Timeline of the Universe</h2>
        <p className="text-center">From the Big Bang to now — trace the major milestones of cosmic evolution.</p>
        <div className="text-center">
          <Button as={Link} to="/timeline" variant="dark">View Full Timeline</Button>
        </div>
      </Container>

      {/* Recent Articles */}
      <Container className="py-5 bg-light">
        <h2 className="text-center mb-4">Recent Articles</h2>
        <Row className="g-4">
          {[1, 2, 3].map(id => (
            <Col md={4} key={id}>
              <Card>
                <Card.Img variant="top" src={`/article${id}.jpg`} />
                <Card.Body>
                  <Card.Title>Sample Article Title {id}</Card.Title>
                  <Card.Text>A brief description about this article topic...</Card.Text>
                  <Button as={Link} to={`/articles/${id}`} variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quiz CTA */}
      <Container className="py-5 text-center">
        <h2>Think You Know Space?</h2>
        <p>Test your cosmic knowledge with our fun and challenging quiz!</p>
        <Button as={Link} to="/quiz" variant="success">Take the Quiz</Button>
      </Container>

      {/* Join Our Mission */}
      <Container className="py-5 bg-dark text-light text-center">
        <h4>Stay Curious. Join CosmoQuest.</h4>
        <p>Follow us on social media or subscribe to stay updated with new content and discoveries.</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://twitter.com" className="text-light text-decoration-none">Twitter</a>
          <a href="https://youtube.com" className="text-light text-decoration-none">YouTube</a>
          <a href="https://instagram.com" className="text-light text-decoration-none">Instagram</a>
        </div>
      </Container>
    </>
  );
};

export default Home;
