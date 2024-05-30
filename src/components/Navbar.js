// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './Navbar.css';

const CustomNavbar = () => {
    const { currentUser, login, logout, signInWithGoogle, signInWithFacebook, signInWithPhoneNumber } = useAuth();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            handleClose();
        } catch (error) {
            alert(error.message);
        }
    };

    const [showModal, setShowModal] = useState(false);

    const handleLoginOption = (provider) => {
        switch (provider) {
            case 'google':
                signInWithGoogle();
                break;
            case 'facebook':
                signInWithFacebook();
                break;
            case 'phone':
                signInWithPhoneNumber();
                console.log("Hello world!");
                break;
            default:
                break;
        }
        setShowModal(false);
    };
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">Hotel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
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
                        <Button variant="outline-light" onClick={handleShow}>Login</Button>
                    )}
                </Navbar.Collapse>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={() => handleLoginOption('google')} variant="primary" block>Login with Google</Button>
                    <Button onClick={() => handleLoginOption('facebook')} variant="primary" block>Login with Facebook</Button>
                    <Button onClick={() => handleLoginOption('phone')} variant="primary" block>Login with Phone</Button>
                </Modal.Body>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={() => handleLoginOption('google')} variant="primary" block>Login with Google</Button>
                    <Button onClick={() => handleLoginOption('facebook')} variant="primary" block>Login with Facebook</Button>
                    <Button onClick={() => handleLoginOption('phone')} variant="primary" block>Login with Phone</Button>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default CustomNavbar;
