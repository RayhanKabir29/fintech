import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar sticky="top"  collapseOnSelect expand="lg">
            <Container>
                    <Navbar.Brand as ={HashLink} to="/home#home"><img src={logo} alt="logo" className='img-fluid' style ={{width: '120px'}}/></Navbar.Brand>
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