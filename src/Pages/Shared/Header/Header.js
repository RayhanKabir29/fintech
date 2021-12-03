import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Pages</Nav.Link>
                <Nav.Link href="#pricing">Services</Nav.Link>
                <Nav.Link href="#home">Shop</Nav.Link>
                <Nav.Link href="#features">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
         </>
    );
};

export default Header;