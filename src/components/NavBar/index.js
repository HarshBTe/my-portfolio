
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">Harsh</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Certifications</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav>
                        <a href="harsh_resume.pdf" download="HarshResume">
                            <button className="resume-btn">Download Resume</button>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
