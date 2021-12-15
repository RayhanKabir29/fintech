import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
      <div>
       <div className="banner-section">
         <Container>
           <Row>
            <Col md={4} xs={12}>
              <h1>Image</h1>
            </Col>
            <Col md={8} xs={12}>
              <p>text</p>
            </Col>
           </Row>
         </Container>
       </div>
      </div>
    );
};

export default Banner;


//   style={{
    //      backgroundImage: `url("https://i.ibb.co/wdH7VQv/main-banner.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center', height: '100vh'
    //   }}