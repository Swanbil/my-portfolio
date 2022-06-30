import React, { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "../style/NavBar.css";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const NavBar: FC<any> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container fluid>
                <Navbar.Brand >
                    <span className="logo">My Portfolio</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#"><span  className="link">Home</span></Nav.Link>
                        <Nav.Link href="#about"><span  className="link">About</span></Nav.Link>
                        <Nav.Link href="#skills"><span  className="link">Skills</span></Nav.Link>
                        <Nav.Link href="#projects"><span className="link">Projects</span></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/Swanbil" target="_blank">
                            <span  className="button-link">
                                <BsGithub className="icone" />
                            </span>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/swan-bilek-2804b21ba/" target="_blank">
                            <span  className="button-link">
                                <BsLinkedin className="icone" />
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;