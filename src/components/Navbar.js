import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Modal, Dropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './Navbar.css';

const CustomNavbar = () => {
    const { currentUser, logout, signInWithGoogle, signInWithFacebook, signInWithPhoneNumber } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleLoginOption = async (provider) => {
        setLoading(true);
        try {
            switch (provider) {
                case 'google':
                    await signInWithGoogle();
                    break;
                case 'facebook':
                    await signInWithFacebook();
                    break;
                case 'phone':
                    const phoneNumber = prompt('Enter phone number');
                    await signInWithPhoneNumber(phoneNumber);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setShowModal(false);
        }
    };

    const getUserInitials = (name) => {
        const initials = name.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
                <Navbar.Brand as={Link} to="/" className="navbar-brand">Hotel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto navbar-nav">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/rooms" className="nav-link">Rooms</Nav.Link>
                        <Nav.Link as={Link} to="/amenities" className="nav-link">Amenities</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/booking" className="nav-link">Book Now</Nav.Link>
                    </Nav>
                    {currentUser ? (
                        <Dropdown >
                            <Dropdown.Toggle as="div" id="dropdown-basic" className="user-initials">
                                {getUserInitials(currentUser.displayName)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" className="custom-dropdown-menu">
                                <Dropdown.Item as={Link} to="/">My GPTs</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/">Customize GPT</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Button
                            onClick={() => setShowModal(true)}
                            variant="outline-light"
                            className="login-button"
                        >
                            Login
                        </Button>
                    )}
                </Navbar.Collapse>
            </Navbar>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button
                        onClick={() => handleLoginOption('google')}
                        variant="primary"
                        block
                        disabled={loading}
                        className="login-option-button"
                    >
                        {loading ? 'Logging in...' : 'Login with Google'}
                    </Button>
                    <Button
                        onClick={() => handleLoginOption('facebook')}
                        variant="primary"
                        block
                        disabled={loading}
                        className="login-option-button"
                    >
                        {loading ? 'Logging in...' : 'Login with Facebook'}
                    </Button>
                    <Button
                        onClick={() => handleLoginOption('phone')}
                        variant="primary"
                        block
                        disabled={loading}
                        className="login-option-button"
                    >
                        {loading ? 'Logging in...' : 'Login with Phone'}
                    </Button>
                    <div id="recaptcha-container"></div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CustomNavbar;
