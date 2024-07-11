import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/header.css';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="logo-container">
                    <img
                        src="/LOGO-HOASON-nho-xanh.png"
                        className="logo"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home" className={({ isActive }) =>
                            `nav-link ${isActive ? 'fw-bold text-primary' : ''}`}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/product" className={({ isActive }) =>
                            `nav-link ${isActive ? 'fw-bold text-primary' : ''}`}>
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/management" className={({ isActive }) =>
                            `nav-link ${isActive ? 'fw-bold text-primary' : ''}`}>
                            Management
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">
                            <i className="bi bi-box-arrow-in-left"></i> Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}