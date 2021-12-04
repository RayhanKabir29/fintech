import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './News.css';

const News = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <div className="news-section">
                        <div className="news-heading">
                            <h1>Recent News & Events</h1>
                            <h5>OUR BLOGS</h5>
                        </div>
                        <div className="more-news">
                            <p>More</p>
                        </div>
                    </div>   
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>  
                    </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                        </Col>
                        <Col xs={12} md={4}>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                        </Col> 
                </Row>
            </Container>
        </div>
    );
};

export default News;