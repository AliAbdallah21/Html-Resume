import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { resumeData } from '../../PublicResume/resumeData';

import './Contact.css'; // Add this to each component file

export const Contact = () => (
  <section id="contact" className="py-5 bg-dark text-white">
    <Container>
      <h2 className="text-center mb-5 fw-bold">Let's Connect</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-white border-secondary">
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              <a href={`mailto:${resumeData.personalInfo.email}`} className="text-white">
                {resumeData.personalInfo.email}
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white border-secondary">
              <FontAwesomeIcon icon={faGithub} className="me-3" />
              <a href={resumeData.personalInfo.github} className="text-white" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </ListGroup.Item>
          </ListGroup>

          {/* ✅ Download Resume Button */}
          <div className="text-center mt-4">
            <a 
              href="ResumePics/Ali_Resume.pdf" 
              download 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline-light" size="lg" className="me-3">
                <FontAwesomeIcon icon={faFile} className="me-2" />
                Download Resume
              </Button>
            </a>
          </div>

        </Col>
      </Row>
    </Container>
  </section>
);
