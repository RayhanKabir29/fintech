import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
             <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} className= "text-center text-sm-left" >
                        <div className="about-section-header">
                        <h1>
                            <span style={{color:'#ffc412'}}>F</span>inancial<br/>Advices for <br/>Success
                        </h1>
                        <p>Welcome To GTAX</p>
                        </div>
                        <div className="about-section-info ">
                            <p>
                            It's not just about your money, it's about your life. Finvision professionals understand how complex your life and financial situation can be, and we're here to help. Our team of certified financial planners can help you get the right information so you can make the best decisions.
                            </p>
                        </div> 
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col md={12} xs={12} className="text-center mb-3">
                                <div className="about-work-heading">
                                    g<h1>What We Do</h1>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="mb-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>Financial Planing</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className="mb-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>Investment Planing</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={6} className="mb-3">
                                <Card className="h-100">
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>Retirement Planing</Card.Title>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} className="mb-3">
                                <Card className="h-100" >
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>Devorce Planing</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;