import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="footer-left">
                                <h1>Global <span style={{color:'#FFC412'}}>Tax Online</span></h1>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="footer-right">
                                <div className="copyright">
                                    <p>Copyright 2018 All Rights Reserved</p>
                                </div>
                                <div className="legal-section">
                                <a href="#" className="me-3">Privacy Policy</a> |
                                <a href="#">Legal</a>
                                </div>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;