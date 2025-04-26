import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { resumeData } from '../../PublicResume/resumeData';
import './Hero.css';

export const Hero = () => (
  <section id="home" className="hero-section vh-100 d-flex align-items-center">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-5 mb-md-0">
          <img
            src={resumeData.personalInfo.profilePic}
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6} className="text-white text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">{resumeData.personalInfo.name}</h1>
          <h2 className="h3 mb-4">{resumeData.personalInfo.title}</h2>
          <p className="lead mb-4">{resumeData.about}</p>

          {/* 👉 Native anchor link, no react-scroll */}
          <a
            href="#contact"
            className="btn btn-outline-light"
            style={{ padding: '10px 20px', fontSize: '18px', display: 'inline-block' }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            Contact Me
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);
