import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ATO from "../../images/ATO.png";
import ASIC from "../../images/ASIC.png";
import CPA from "../../images/CPA.jpg";
import ATO2 from "../../images/ATO-2.png";

const Choose = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Why Choose Global Tax Online?</Card.Title>
                <Card.Text>
                  <Row>
                    <span>
                      <ul className="p-5">
                        <li>Secure online portal</li>
                        <li>Access to Expert Accountants</li>
                        <li>Affordable, fixed price fee</li>
                        <li>Fast lodgements -maximized Refunds</li>
                      </ul>
                    </span>
                  </Row>
                  <Row>
                    <Col sm={6} md={6}>
                      <img src={ATO} alt="" className="img-fluid" />
                    </Col>
                    <Col sm={6} md={6}>
                      <img src={ASIC} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <span>
                      <ul className="p-5">
                        <li>
                          15 Years of Australian Tax and Accounting Experience
                        </li>
                        <li>
                          Maximize your deductions to maximize your refunds
                        </li>
                        <li>On spot tax secure Tax lodgments</li>
                        <li>Visit our conveniently located offices</li>
                      </ul>
                    </span>
                  </Row>
                  <Row>
                    <Col sm={6} md={6}>
                      <img
                        src={CPA}
                        alt=""
                        className="img-fluid"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col sm={6} md={6}>
                      <img
                        src={ATO2}
                        alt=""
                        className="img-fluid"
                        style={{ width: "45%" }}
                      />
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Choose;
