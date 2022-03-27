import React, { useState } from "react";
import "./DetailCalc.css";
import {
  Col,
  Container,
  Form,
  Row,
  Accordion,
  Table,
  Button,
} from "react-bootstrap";

const DetailsCalc = () => {
  const [optionCheck, setOptionCheck] = useState([
    {
      label: "Includes Superannuation",
      isChecked: false,
      value: "superannuation",
    },
    {
      label: "Student loan",
      isChecked: false,
      value: "student-loan",
    },
  ]);

  const [superannuation, setSuperAnnuation] = useState([
    {
      label: " No Superannuation Guarantee",
      isChecked: false,
      value: "no-superannuation",
    },
    {
      label: "Salary Sacrifice Superannuation",
      isChecked: false,
      value: "salary-sacrifice-superannuation",
    },
    {
      label: "Voluntary Superannuation",
      isChecked: false,
      value: "voluntary-superannuation",
    },
    {
      label: " Carry forward Superannuation",
      isChecked: false,
      value: "carry-forward-superannuation",
    },
    {
      label: "Contributions to Spouse's Super",
      isChecked: false,
      value: "contributions-to-spouse",
    },
    {
      label: " Over 65",
      isChecked: false,
      value: " over-65",
    },
  ]);
  const [taxCategory, setTaxCategory] = useState([
    {
      label: "Non Resident",
      isChecked: false,
      value: "non-resident",
    },
    {
      label: "Working Holiday Maker",
      isChecked: false,
      value: "working-holiday-make",
    },
    {
      label: "No tax-free threshold",
      isChecked: false,
      value: "no-tax-free-threshold",
    },
  ]);
  const [medicare, setMedicare] = useState([
    {
      label: "Medicare Exemption",
      isChecked: false,
      value: "medicare-exemption",
    },
    {
      label: " Dependant Children",
      isChecked: false,
      value: "dependant-children",
    },
    {
      label: "Spouse (married or de-facto)",
      isChecked: false,
      value: "spouse",
    },
    {
      label: "Senior & pensioner offset (SAPTO)",
      isChecked: false,
      value: "senior-pensioner",
    },
  ]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <form onChange={(e) => handleFormSubmit(e)}>
              <Row>
                <Col md={8} xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Annual Salary</Form.Label>
                    <Form.Control type="Number" placeholder="Annual Salary" />
                  </Form.Group>
                </Col>
                <Col md={4} xs={12}>
                  <Form.Label>Per Cycle</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="0">Annual </option>
                    <option value="1">Monthly</option>
                    <option value="2">Fortnightly</option>
                    <option value="3">Weakly</option>
                    <option value="4">Daily</option>
                  </Form.Select>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6} sm={12}>
            <p>Options</p>
            {optionCheck.map((option, index) => (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onChange={() =>
                    //
                    (option.isChecked = !option.isChecked)
                  }
                  defaultChecked={option.isChecked}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  {option.label}
                </label>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="">
                <Accordion.Header>Superannuation</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Superannuation Rate</Form.Label>
                      <Form.Group className="mb-3">
                        <Form.Control type="Number" defaultValue="10%" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Frequency</Form.Label> <br />
                      <Button>Maximize</Button>
                    </Col>
                  </Row>
                  <div className="supperannuation-check">
                    {superannuation.map((option, index) => (
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            //
                            (option.isChecked = !option.isChecked)
                          }
                          defaultChecked={option.isChecked}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="">
                <Accordion.Header>Tax category</Accordion.Header>
                <Accordion.Body>
                  <div className="tax-category">
                    {taxCategory.map((option, index) => (
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            //
                            (option.isChecked = !option.isChecked)
                          }
                          defaultChecked={option.isChecked}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6} sm={12} className="my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Medicare & Senior offset</Accordion.Header>
                <Accordion.Body>
                  {medicare.map((option, index) => (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onChange={() =>
                          //
                          (option.isChecked = !option.isChecked)
                        }
                        defaultChecked={option.isChecked}
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" className="my-3">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Deductions, Salary Sacrifice & Other income
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col xs={12} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="Annual Tax Deduction"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Salary Sacrifice</Form.Label>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="Annual Tax Deduction"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Frequency</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="0">Annual </option>
                        <option value="1">Monthly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Weakly</option>
                        <option value="4">Daily</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="ACapital Gains"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Allowances</Form.Label>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="Annual Tax Deduction"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Year</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option value="0">Annual </option>
                        <option value="1">Monthly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Weakly</option>
                        <option value="4">Daily</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="Other Income or Loss"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="Number"
                          placeholder="Business Income"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <Form.Group className="mb-3">
                        <Form.Control type="Number" placeholder="Tax Credit" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Table>
                  <tr>
                    <th>Taxable Income</th>
                    <th>10</th>
                    <th>20</th>
                    <th>30</th>
                    <th>40</th>
                  </tr>
                </Table>
              </Accordion.Header>
              <Accordion.Body>
                <Table>
                  <tr>
                    <th>
                      <p>Base salary</p>
                    </th>
                    <th> 10</th>
                    <th>20</th>
                    <th>30</th>
                    <th>40</th>
                  </tr>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </>
  );
};

export default DetailsCalc;
