import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
            <Col md={6} sm={12}>
             <div className="banner-img d-flex">
              <img src={TAB} alt="" className="img-fluid" style={{width:"150px", height:"105px"}}/>
              <img src={CPA} alt=""  className="img-fluid" style={{width:"230px", height:"100px", marginLeft:"10px"}}/>
             </div>
            </Col>
            <Col md={6} xs={12} className="">
              
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