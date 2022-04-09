import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-section">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="newsletter-heading">
                <h1>Newsletter</h1>
                <h6 style={{ letterSpacing: "10px" }}>SUBSCRIBE</h6>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="subs-form">
                <input type="email" name="" id="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsLetter;
