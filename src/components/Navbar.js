// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const CustomNavbar = () => {
    const { currentUser, login, logout } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Hotel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
                        <Nav.Link as={Link} to="/amenities">Amenities</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Book Now</Nav.Link>
                    </Nav>
                    {currentUser ? (
                        <Button variant="outline-light" onClick={logout}>Logout</Button>
                    ) : (
                        <Button variant="outline-light" onClick={login}>Login</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
