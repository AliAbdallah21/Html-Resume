import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; // Add this to each component file

export const Skills = ({ skills }) => (
  <section id="skills" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-5 display-4 fw-bold text-primary">
        <FontAwesomeIcon icon={faCode} className="me-3" />
        Technical Expertise
      </h2>
      
      <Row className="g-4">
        {Object.entries(skills).map(([category, items], index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm skill-card">
              <Card.Header className="bg-primary text-white">
                <h3 className="h5 mb-0">
                  {category === 'frontend' && <FontAwesomeIcon icon={faLaptopCode} className="me-2" />}
                  {category === 'backend' && <FontAwesomeIcon icon={faDatabase} className="me-2" />}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
              </Card.Header>
              <Card.Body>
                {items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="text-muted small">{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      variant="primary"
                      className="rounded-pill"
                      style={{ height: '8px' }}
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);