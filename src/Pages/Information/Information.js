import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './Information.css';

const Information = () => {
    return (
        <div>
            <div className="information-section mt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="info-heading">
                                <h1>Information</h1>
                                <h6 style={{letterSpacing:'10px'}} className=" mt-3 mb-5">AT FINGERTIPS</h6>
                            </div>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Get To Know Us</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Get Informed</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Get Help</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Contact Us</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col xs={12} md={6} >
                            <div className="brand">
                            <Row >
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                                <Col xs={4} md={4} >
                                    <div className="box">

                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Information;