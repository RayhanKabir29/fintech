import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6} className= "text-center text-sm-left" >
                        <div className="section-header">
                        <h1>
                            <span style={{color:'#ffc412'}}>F</span>inancial<br/>Advices for <br/>Success
                        </h1>
                        <p>Welcome Finvision</p>
                        </div>
                        <div className="section-info ">
                            <p>
                            It's not just about your money, it's about your life. Finvision professionals understand how complex your life and financial situation can be, and we're here to help. Our team of certified financial planners can help you get the right information so you can make the best decisions.
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;