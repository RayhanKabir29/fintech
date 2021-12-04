import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';

const Team = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-img">
                            <img src="https://i.ibb.co/1bwXYv9/03-1.jpg" alt="" className="img-fluid"/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-info">
                            <h2>Stephen Yarbrough</h2>
                            <h4>CHIEF FINANCIAL ARCHITECT</h4>
                            <div className="social-icon">

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-img">
                            <img src="https://i.ibb.co/1bwXYv9/03-1.jpg" alt="" className="img-fluid"/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                          <div className="team-member-info">
                            <h2>Stephen Yarbrough</h2>
                            <h4>CHIEF FINANCIAL ARCHITECT</h4>
                            <div className="social-icon">
                                
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-img">
                            <img src="https://i.ibb.co/1bwXYv9/03-1.jpg" alt="" className="img-fluid"/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-info">
                            <h2>Stephen Yarbrough</h2>
                            <h4>CHIEF FINANCIAL ARCHITECT</h4>
                            <div className="social-icon">

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                        <div className="team-member-img">
                            <img src="https://i.ibb.co/1bwXYv9/03-1.jpg" alt="" className="img-fluid"/>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="gx-0">
                          <div className="team-member-info">
                            <h2>Stephen Yarbrough</h2>
                            <h4>CHIEF FINANCIAL ARCHITECT</h4>
                            <div className="social-icon">
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Team;