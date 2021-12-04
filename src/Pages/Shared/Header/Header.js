import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Pages</Nav.Link>
                    <Nav.Link href="#pricing">Services</Nav.Link>
                    <Nav.Link href="#home">Shop</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         </>
    );
};

export default Header;