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
  const [mediCare, setMedicare] = useState(false);
  const [dependent, setDependent] = useState(false);
  const [spouse, setSpouse] = useState(false);
  const [sapto, setSapto] = useState(false);
  const [noSuperAnnuation, setNoSuperAnnuation] = useState(false);
  const [salarySacrifice, setSalarySacrifice] = useState(false);
  const [voluntarySuperAnnuation, setVoluntarySuperAnnuation] = useState(false);
  const [carryForward, setCarryForward] = useState(false);
  const [contribution, setContribution] = useState(false);
  const [overSixtyFive, setOverSixtyFive] = useState(false);
  const [nonResident, setNonResident] = useState(false);
  const [workHoliDay, setWorkHoliDay] = useState(false);
  const [noTaxFree, setNoTaxFree] = useState(false);
  const [partTime, setPartTime] = useState(false);

  const [income, setIncome] = useState();
  const [weaklyTaxableIncome, setWeaklyTaxableIncome] = useState(0);

  // const [checkBox, setCheckBox] = useState([]);
  // const checkChange = (value) => {
  //   if (checked.indexOf(value) !== -1) {
  //     setCheckBox(checked.filter((checkBox) => checkBox !== value));
  //   } else {
  //     setChecked([...checked, value]);
  //   }

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

  const handleOnChange = (e) => {
    e.preventDefault();
    setWeaklyTaxableIncome(income - 50);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <form onChange={(e) => handleOnChange(e)}>
              <Row>
                <Col md={8} xs={12}>
                  <div className="income">
                    <label>Salary: </label> <br />
                    <input
                      type="number"
                      name="incomeInput"
                      defaultValue={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
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
            <Row className="ms-1 mb-3">
              <div className="form-check">
                <input
                  onClick={() => setPartTime(!partTime)}
                  className="form-check-input"
                  type="checkbox"
                  value="salary-sacrifice"
                  id="salary-sacrifice"
                />
                <label className="form-check-label">Pro-rata / Part-time</label>
              </div>
              {partTime ? (
                <Row className="my-5">
                  <Col md={4}>
                    <div className="form-group">
                      <label>Days</label>
                      <input
                        type="number"
                        className="form-control"
                        id="sacrifice-amount"
                        placeholder="1"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label>Days</label>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Days</option>
                        <option value="2">Hours</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label>Each</label>
                      <Form.Select aria-label="Default select example">
                        <option value="1">Week</option>
                        <option value="2">Fortnightly</option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>
              ) : null}
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <p>Options</p>
            {optionCheck.map((option, index) => (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={() =>
                    //
                    (option.isChecked = !option.isChecked)
                  }
                  defaultChecked={option.isChecked}
                />
                <label className="form-check-label" for="flexCheckDefault">
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
                      {noSuperAnnuation ? null : (
                        <div>
                          <Form.Label>Frequency</Form.Label> <br />
                          <Button>Maximize</Button>
                        </div>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setNoSuperAnnuation(!noSuperAnnuation)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="no-super-annuation"
                      />
                      <label className="form-check-label">
                        No Superannuation Guarantee
                      </label>
                    </div>
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setSalarySacrifice(!salarySacrifice)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="salary-sacrifice"
                      />
                      <label className="form-check-label">
                        Salary Sacrifice Superannuation
                      </label>
                    </div>
                    {salarySacrifice ? (
                      <div>
                        <div className="form-group">
                          <label>Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            id="sacrifice-amount"
                            placeholder="1"
                          />
                        </div>
                        <div className="form-group">
                          <label>Frequency</label>
                          <Form.Select aria-label="Default select example">
                            <option value="1">Daily</option>
                            <option value="2">Weekly</option>
                            <option value="3">FortNightly</option>
                            <option value="4">Monthly</option>
                            <option value="5">Annualy</option>
                          </Form.Select>
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() =>
                          setVoluntarySuperAnnuation(!voluntarySuperAnnuation)
                        }
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="voluntary-super"
                      />
                      <label className="form-check-label">
                        Voluntary Superannuation
                      </label>
                    </div>
                    {voluntarySuperAnnuation ? (
                      <div>
                        <div className="form-group">
                          <label>Annual Contribution</label>
                          <input
                            type="number"
                            className="form-control"
                            id="annual-contribution"
                            placeholder="1"
                          />
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="maximise-govt"
                          />
                          <label className="form-check-label">
                            Maximise Government super co-contribution
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="over-71"
                          />
                          <label className="form-check-label">Over 71</label>
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setCarryForward(!carryForward)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="carry-forward-superannuation"
                      />
                      <label className="form-check-label">
                        Carry forward Superannuation
                      </label>
                    </div>
                    {carryForward ? (
                      <div>
                        <div className="form-group">
                          <label>Carry Forward Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            id="carry-forward"
                            placeholder="1"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setContribution(!contribution)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="set-contribute"
                      />
                      <label className="form-check-label">
                        Contributions to Spouse's Super
                      </label>
                    </div>
                    {contribution ? (
                      <div>
                        <div className="form-group">
                          <label>Spouse Income</label>
                          <input
                            type="number"
                            className="form-control"
                            id="dependent-number"
                            placeholder="1"
                          />
                        </div>
                        <div className="form-group">
                          <label>Contribution</label>
                          <input
                            type="number"
                            className="form-control"
                            id="dependent-number"
                            placeholder="1"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setOverSixtyFive(!overSixtyFive)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Over 65</label>
                    </div>
                    {overSixtyFive ? null : null}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0" className="mt-3">
              <Accordion.Item eventKey="">
                <Accordion.Header>Tax category</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setNonResident(!nonResident)}
                        className="form-check-input"
                        type="checkbox"
                        id="nonResident"
                        value="non-resident"
                      />
                      <label>Non Resident</label>
                    </div>
                    {nonResident ? null : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setWorkHoliDay(!workHoliDay)}
                        className="form-check-input"
                        type="checkbox"
                        value="working-holiday"
                        id="work-holiday"
                      />
                      <label>Working Holiday Maker</label>
                    </div>
                    {workHoliDay ? (
                      <div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="tax-file"
                          />
                          <label className="form-check-label">
                            Tax File Number
                          </label>
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setNoTaxFree(!noTaxFree)}
                        className="form-check-input"
                        type="checkbox"
                        value="no-tax-free"
                        id="no-tax-free"
                      />
                      <label>No tax-free threshold</label>
                    </div>
                    {noTaxFree ? null : null}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6} sm={12} className="my-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Medicare & Senior offset</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setMedicare(!mediCare)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="medicare"
                      />
                      <label className="form-check-label">
                        Medicare Exemption
                      </label>
                    </div>
                    {mediCare ? (
                      <div>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Full</option>
                          <option value="2">Half</option>
                        </Form.Select>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setDependent(!dependent)}
                        className="form-check-input"
                        type="checkbox"
                        value="Dependant Children"
                      />
                      <label>Dependant Children</label>
                    </div>
                    {dependent ? (
                      <div>
                        <div className="form-group">
                          <label>Number Of Dependent</label>
                          <input
                            type="number"
                            className="form-control"
                            id="no-children"
                            placeholder="1"
                          />
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="apply-medicare"
                          />
                          <label className="form-check-label">
                            Apply Medicare Adjustment
                          </label>
                        </div>
                        <div className="form-group">
                          <label>Child Support Payment</label>
                          <input
                            type="number"
                            className="form-control"
                            id="child-support"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setSpouse(!spouse)}
                        className="form-check-input"
                        type="checkbox"
                        value="set-spouse"
                        id="set-spouse"
                      />
                      <label>Spouse (married or de-facto)</label>
                    </div>
                    {spouse ? (
                      <div>
                        <div className="form-group">
                          <label>Spouse Annual Income</label>
                          <input
                            type="number"
                            className="form-control"
                            id="spouse-annual"
                            placeholder="1"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Row>
                  <Row>
                    <div className="form-check">
                      <input
                        onClick={() => setSapto(!sapto)}
                        className="form-check-input"
                        type="checkbox"
                        value="sapto"
                      />
                      <label>Spouse (married or de-facto)</label>
                    </div>
                    {sapto ? null : null}
                  </Row>
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
          <Table borderless style={{ marginLeft: "25px" }}>
            <tbody>
              <tr>
                <th style={{ width: "641px" }}>Pay</th>
                <th style={{ width: "153px" }}>Pay</th>
                <th style={{ width: "153px" }}>Pay</th>
                <th style={{ width: "153px" }}>Pay</th>
                <th>Pay</th>
              </tr>
            </tbody>
          </Table>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Table>
                  <tbody>
                    <tr>
                      <th style={{ width: "641px" }}>Taxable Income</th>
                      <th style={{ width: "153px" }}>{weaklyTaxableIncome}</th>
                      <th>20</th>
                      <th>30</th>
                      <th>40</th>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Header>
              <Accordion.Body>
                <Table>
                  <tbody>
                    <tr>
                      <th>Base salary</th>
                      <th>{weaklyTaxableIncome}</th>
                      <th>20</th>
                      <th>30</th>
                      <th>40</th>
                    </tr>
                    <tr>
                      <th>Deduction</th>
                      <th>10</th>
                      <th>20</th>
                      <th>30</th>
                      <th>40</th>
                    </tr>
                    <tr>
                      <th>Capital</th>
                      <th>10</th>
                      <th>20</th>
                      <th>30</th>
                      <th>40</th>
                    </tr>
                  </tbody>
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
