import { Container, Row, Col, Badge, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Experience.css'; // Add this to each component file

export const Experience = ({ experience }) => (
  <section id="experience" className="py-5 bg-white">
    <Container>
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">
        <FontAwesomeIcon icon={faBriefcase} className="me-3" />
        Professional Experience
      </h2>

      <div className="timeline-wrapper">
        {experience.map((exp, index) => (
          <Row key={index} className="timeline-item mb-4">
            <Col md={3} className="timeline-date">
              <div className="bg-primary text-white p-3 rounded text-center mb-3 mb-md-0">
                <div className="small">{exp.duration}</div>
              </div>
            </Col>
            
            <Col md={9}>
              <div className="timeline-content p-4 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h3 className="h4 mb-2">{exp.title}</h3>
                    <h4 className="h5 text-muted mb-3">
                      <FontAwesomeIcon icon={faBuilding} className="me-2" />
                      {exp.company}
                    </h4>
                  </div>
                  <Badge pill bg="light" text="dark" className="border">
                    {exp.type || 'Full-time'}
                  </Badge>
                </div>

                <Accordion>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>View Details</Accordion.Header>
                    <Accordion.Body>
                      <ul className="list-unstyled">
                        {exp.description.split('\n').map((point, i) => (
                          <li key={i} className="mb-2">
                            <i className="fas fa-caret-right text-primary me-2"></i>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        <h5 className="h6 text-muted">Technologies Used:</h5>
                        <div className="d-flex gap-2 flex-wrap">
                          {exp.techStack?.map((tech, i) => (
                            <Badge key={i} pill bg="primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  </section>
);