import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <div>
            <Container className="mt-5">
            <div className="banner-bottom">
         <Row>
            <Col xs={12} md={3} className= "text-center text-sm-left" >
              <div className="section-header">
                <h2><span style={{color:'#ffc412'}}>F</span>inancial<br/>Advices for <br/>Success</h2>
                  <p>Welcome Finvision</p>
              </div>
              <div className="section-info ">
                <p>It's not just about your money, it's about your life. Finvision professionals understand how complex your life and financial situation can be, and we're here to help. Our team of certified financial planners can help you get the right information so you can make the best decisions.</p>
                <Button>Our Services</Button>
              </div>
              </Col>
                <Col xs={12} md={9}>
                  <Row className="mb-5">
                    <Col xs={12} md={4}>
                      <Card className="mb-3 h-100">
                        <Card.Img variant="top" src="" />
                          <Card.Body>
                            <h2>Online Tax Return with Experts</h2>
                          </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={4}>
                      <Card className="mb-3 h-100">
                        <Card.Img variant="top" src="" />
                          <Card.Body>
                            <h2>In Office Individual Tax Return</h2>
                              </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={4}>
                    <Card className="mb-3 h-100">
                      <Card.Img variant="top" src="" />
                        <Card.Body>
                          <h2>Company/Business Tax Return</h2>
                            </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row >
                  
                  </Row>
              </Col>
          </Row>
         </div>
            </Container>
        </div>
    );
};

export default Services;