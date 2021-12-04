import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Work.css';

const Work = () => {
    return (
        <div>
            <div className="work-process">
                <Container>
                    <Row>
                        <div className="work-process-heading text-center">
                            <h1>How We Work</h1>
                            <h6 style={{letterSpacing:'7px', fontWeight:'400'}}>WITH CLIENTS</h6>
                        </div>
                    </Row>
                    <Row className="work-step text-center mt-5">
                        <Col xs={12} md={4} className="first-step">
                            <h1>Step 1</h1>
                            <h4>Personal Interview</h4>
                            <h5>icon</h5>
                        </Col>
                        <Col xs={12} md={4} className="second-step">
                            <h1>Step 2</h1>
                            <h4>Engagement</h4>
                            <h5>icon</h5>
                        </Col>
                        <Col xs={12} md={4} className="third-step">
                            <h1>Step 3</h1>
                            <h4>Plan Maintanence</h4>
                            <h5>icon</h5>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Work;