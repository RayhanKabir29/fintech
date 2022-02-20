import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="top-nav">
        <div className="top-right">
          <div className="phone me-3">
            <p>+61 2 8021 5360 or 1300 110 812</p>
          </div>
          <div className="email">
            <p>contact@globaltaxonline.com.au</p>
          </div>
        </div>
        <div className="top-left">
          <p>
            <a href="">Contact us</a>
          </p>
          <p>
            <a href="">About us</a>
          </p>
        </div>
      </div>
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ width: "120px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services#service">
              Our Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/price#pricing">
              Pricing
            </Nav.Link>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.ato.gov.au/Rates/Tax-tables/"
                target="_blank"
              >
                PAYG Tables
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.ato.gov.au/rates/fbt/"
                target="_blank"
              >
                FBT Rates
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.ato.gov.au/Rates/Foreign-exchange-rates/?anchor=Monthlyrates#Monthlyrates"
                target="_blank"
              >
                ATO Forex Rates
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://connectonline.asic.gov.au/RegistrySearch/faces/landing/bn/SearchBnRegisters.jspx?_adf.ctrl-state=8ms6kj4sc_4"
                target="_blank"
              >
                Business names Search
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://connectonline.asic.gov.au/RegistrySearch/faces/landing/SearchRegisters.jspx?_adf.ctrl-state=8ms6kj4sc_12"
                target="_blank"
              >
                Company Names Search
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.abr.business.gov.au/"
                target="_blank"
              >
                ABN lookup
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://superfundlookup.gov.au/"
                target="_blank"
              >
                Superfund lookup
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.ato.gov.au/Forms/?duration=2015/2016&marketsegment=Business&sorttype=SortByTopic"
                target="_blank"
              >
                ATO Forms
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={HashLink} to="/home#appoinment">
              My Appoinment
            </Nav.Link>
            <Nav.Link as={HashLink} to="/login">
              Online Users Login
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
