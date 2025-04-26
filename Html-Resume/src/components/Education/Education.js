  import { Container, Card, Row, Col } from 'react-bootstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUniversity } from '@fortawesome/free-solid-svg-icons';
  import './Education.css'; // Add this to each component file
  export const Education = () => (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-primary">
          <FontAwesomeIcon icon={faUniversity} className="me-3" />
          Education
        </h2>

        <Card className="shadow-lg mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={3} className="text-center mb-3 mb-md-0">
                <div className="bg-primary text-white p-3 rounded">
                  <span className="h2 mb-0 d-block">2020-2024</span>
                  <span className="small">Enrollment</span>
                </div>
              </Col>
              <Col md={9}>
                <h3 className="mb-3">BSc Computer Science</h3>
                <h4 className="text-muted mb-3">MIU University</h4>
                <div className="d-flex gap-2 mb-3">
                  <span className="badge bg-primary">GPA: 3.8/4.0</span>
                  <span className="badge bg-success">Dean's List</span>
                </div>
                <p className="lead mb-0">
                  Minor in Artificial Intelligence with focus on machine learning fundamentals
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );