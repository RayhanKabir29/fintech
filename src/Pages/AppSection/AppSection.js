import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AppSection.css';

const AppSection = () => {
    return (
        <div>
            <div className="app-section mt-5">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="download-text">
                            <h1 className="py-5">Download <br /> Finvision App <br /> on Android & iOS</h1>
                            <h4>FOR FREE</h4>
                            </div>
                            <div className="app-icon">
                                <div className="play-store">

                                </div>
                                <div className="app-store">

                                </div>
                            </div>
                        </Col> 
                        <Col xs={12} md={4}>
                            <div className="app-img">
                                <img src="https://i.ibb.co/bvBWr7W/phone.png" alt="App" className="img-fluid" style={{height:'575px', margin:'-45px'}}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AppSection;