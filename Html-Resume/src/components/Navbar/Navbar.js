import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const CustomNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container fluid="lg">
        <Navbar.Brand 
          as={Link} 
          to="home" 
          smooth 
          spy 
          className="navbar-brand"
          offset={-80}
        >
          <FontAwesomeIcon icon={faCode} className="brand-icon" />
          <span className="brand-text">Ali Abdallah</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler" />

        <Navbar.Collapse id="navbar-nav" className="navbar-collapse">
          <Nav className="ms-auto nav-items">
            <Link 
              to="home" 
              smooth 
              spy 
              activeClass="active-nav"
              className="nav-link"
              offset={-80}
            >
              Home
            </Link>
            
            <Link 
              to="skills" 
              smooth 
              spy 
              activeClass="active-nav"
              className="nav-link"
              offset={-80}
            >
              Skills
            </Link>
            
            <Link 
              to="experience" 
              smooth 
              spy 
              activeClass="active-nav"
              className="nav-link"
              offset={-80}
            >
              Experience
            </Link>
            
            <Link 
              to="projects" 
              smooth 
              spy 
              activeClass="active-nav"
              className="nav-link"
              offset={-80}
            >
              Projects
            </Link>
            
            <Link 
              to="contact" 
              smooth 
              spy 
              activeClass="active-nav"
              className="nav-link"
              offset={-80}
            >
              Contact
            </Link>

            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};