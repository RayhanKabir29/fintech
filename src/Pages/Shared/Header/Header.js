import React from 'react';
import { Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">PAYG Tables</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">FBT Rates</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ATO Forex Rates</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Business names Search</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Company Names Search</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ABN lookup</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Superfund lookup</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ATO Forms</NavDropdown.Item>
                    </NavDropdown>
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