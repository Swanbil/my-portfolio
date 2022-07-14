import React from 'react'
import { Nav } from 'react-bootstrap';
import "../style/Footer.css";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className='footer bg-light'>
            <h5>🌵 Swaninho 🌵</h5>
            <Nav className='nav-list'>
                <Nav.Link href="https://github.com/Swanbil" target="_blank">
                    <span className="button-link">
                        <BsGithub className="icone" />
                    </span>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/swan-bilek-2804b21ba/" target="_blank">
                    <span className="button-link">
                        <BsLinkedin className="icone" />
                    </span>
                </Nav.Link>
            </Nav>
            <Nav className="nav-list">
                <Nav.Link href="#"><span className="link-footer">Home</span></Nav.Link>
                <Nav.Link href="#about"><span className="link-footer">About</span></Nav.Link>
                <Nav.Link href="#skills"><span className="link-footer">Skills</span></Nav.Link>
                <Nav.Link href="#projects"><span className="link-footer">Projects</span></Nav.Link>
            </Nav>
            <p className="text-muted copyright">Swan © 2022</p>

        </footer>
    )
}