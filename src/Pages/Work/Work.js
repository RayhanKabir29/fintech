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
                            <h1>How Does Online Tax Return Work?</h1>
                            <h6 style={{letterSpacing:'2px', fontWeight:'400'}}>Just 4 easy steps to getting your refund through Global taxes Secure Online Portal</h6>
                        </div>
                    </Row>
                    <Row className="work-step text-center mt-5">
                        <Col xs={12} md={3} className="first-step">
                            <h1>Step 1</h1>
                            <h4>Provide Global Tax your consent & submit your Info</h4>
                        </Col>
                        <Col xs={12} md={3} className="second-step">
                            <h1>Step 2</h1>
                            <h4>Tax experts will check & request approval to Lodge
                            </h4>
                        </Col>
                        <Col xs={12} md={3} className="third-step">
                            <h1>Step 3</h1>
                            <h4>Global Tax agents lodge your return</h4>
                        </Col>
                        <Col xs={12} md={3} className="second-step">
                            <h1>Step 4</h1>
                            <h4>You receive refunds</h4>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Work;