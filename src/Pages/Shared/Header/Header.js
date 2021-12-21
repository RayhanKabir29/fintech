import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
            <Container>
                    <Navbar.Brand as ={HashLink} to="/home#home"><span style ={{color: 'black'}}>GTAX</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#service">Our Services</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#pricing">Pricing</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#meeting">Zoom Meeting</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#pricing">Pricing</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#appoinment">My Appoinment</Nav.Link>
                    <Nav.Link as ={HashLink} to="/home#login"> 
                    Online Users Login</Nav.Link>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
         </>
    );
};

export default Header;