import React from 'react';
import { Card, Col, Container,Row } from 'react-bootstrap';

const Choose = () => {
    return (
        <div>
           <Container>
               <Row>
                   <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Why Choose Global Tax Online?</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Secure online portal</li>
                                        <li>Access to Expert Accountants</li>
                                        <li>Affordable, fixed price fee</li>
                                        <li>Fast lodgements -maximised Refunds</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>
                   <Col xs={12} md={6}>
                   <Card>
                        <Card.Body>
                            <Card.Text>
                            <ul>
                                <li>15 Years of Australian Tax and Accounting Experience</li>
                                <li>Maximize your deductions to maximize your refunds</li>
                                <li>On spot tax secure Tax lodgments</li>
                                <li>Visit our conveniently located offices</li>
                            </ul>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Choose;