import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Container, Nav, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Product</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            <Nav.Link href="#deets">Cart</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;