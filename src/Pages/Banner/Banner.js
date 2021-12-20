import React from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';

import CPA from '../../images/CPA.jpg';
import TAB from '../../images/Tpb-Logopng.png';
import './Banner.css';

const Banner = () => {
    return (
      <div>
       <div className="banner-section">
         <Container className='banner py-3'>
           <div className="banner-top">
           <Row>
            <Col md={4} sm={12}>
             <div className="banner-img d-flex">
              <img src={TAB} alt="" className="img-fluid" style={{width:"130px", height:"105px"}}/>
              <img src={CPA} alt=""  className="img-fluid" style={{width:"200px", height:"100px", marginLeft:"10px"}}/>
             </div>
            </Col>
            <Col md={8} xs={12} className="">
              <Row>
                <h2>Register Now for NSW COVID19 Business Grants</h2>
              </Row>
              <Row>
                <div className="banner-btn mt-3 d-flex">
                <Col md={4}>
                  <Button>Register Your Interest</Button>
                </Col>
                <Col md={4}>
                  <Button>Easy Tax Return</Button>
                </Col>
                </div>
              </Row>
            </Col>
           </Row>
           </div>
         
         </Container>
       </div>
      </div>
    );
};

export default Banner;


//   style={{
    //      backgroundImage: `url("https://i.ibb.co/wdH7VQv/main-banner.jpg")`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center', height: '100vh'
    //   }}