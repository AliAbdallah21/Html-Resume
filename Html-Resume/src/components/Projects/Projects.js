import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './Projects.css'; // Add this to each component file

export const Projects = () => (
  <section id="projects" className="py-5">
    <Container>
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">
        <FontAwesomeIcon icon={faCodeBranch} className="me-3" />
        Projects
      </h2>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-lg">
            <Card.Body>
              <Card.Title className="h3 mb-3">Online Resume</Card.Title>
              <div className="d-flex gap-2 mb-3">
                <Badge bg="primary">React</Badge>
                <Badge bg="success">Bootstrap</Badge>
                <Badge bg="info">GitHub Pages</Badge>
              </div>
              <Card.Text className="lead">
                Professional portfolio website featuring:
                <ul className="mt-2">
                  <li>Dynamic content management</li>
                  <li>Responsive design</li>
                  <li>Interactive elements</li>
                </ul>
              </Card.Text>
              <Card.Link href="https://github.com/AliAbdallah21" className="btn btn-primary">
                Live Demo
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);