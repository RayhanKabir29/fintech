import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <div>
          <div className="service pb-5" id="service">
          <Container>
            <Row>
              <Col xs={12} md={12} className= "text-center" >
                <div className="section-header">
                  <h2 className='text-center'><span style={{color:'#ffc412'}}>F</span>inancial Advices Success</h2>
                    <p className='text-center'>Welcome GlobalTax online</p>
                </div>
                <div className="section-info">
                  <p>It's not just about your money, it's about your life. Finvision professionals understand how complex your life and financial situation can be, and we're here to help. Our team of certified financial planners can help you get the right information so you can make the best decisions.</p>
                  <Button>Our Services</Button>
                </div>
              </Col>
            </Row>
            <Row className="m-5">
              <Col xs={12} md={4}>
                <Card className="mb-3 h-100">
                  <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>Online Tax Return with Experts</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Experts complete your tax return by 15-30 Minutes</li>
                        <li>Quick ,Secure & lodged by Tax agents</li>
                      </ul>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button>Lodge Online</Button>
                    </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3 h-100">
                  <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>
                      In Office Individual Tax Return
                      </Card.Title>
                      <Card.Text>
                      <ul>
                          <li>Book your Tax Expert appointment today</li>
                          <li>Meet us in Office or Virtually on Zoom</li>
                          <li>Visit our conveniently located Offices</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button>Book Appoinment</Button>
                    </Card.Footer>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card className="mb-3 h-100">
                  <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>
                      Company/Business Tax Return
                      </Card.Title>
                        <Card.Text>
                          <ul>
                            <li>BAS ,STP ,ATO Lodgements</li>
                            <li>Company Tax Refunds</li>
                            <li>Partnership & Trust tax refunds</li>
                          </ul>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button>Book Appoinment</Button>
                    </Card.Footer>
                  </Card>
              </Col>
          </Row>
         </Container>
          </div>
        </div>
    );
};

export default Services;