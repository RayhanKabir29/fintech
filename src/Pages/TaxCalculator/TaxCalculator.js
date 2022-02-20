import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./TaxCalculator.css";

const TaxCalculator = () => {
  const [salary, setSalary] = useState();
  const [dateTypes, setDateTypes] = useState([
    { value: "Weakly" },
    { value: "Fortnight" },
    { value: "Monthly" },
    { value: "Yearly" },
  ]);
  const [years, setYears] = useState([
    { value: "2021-22" },
    { value: "2022-23" },
  ]);
  const [year, setYear] = useState(null);
  const [dateType, setDateType] = useState(null);
  // const [calculation, setCalculation] = useState(null);
  const [calculated, setCalculated] = useState(0);

  const [weeklySalary, setWeeklySalary] = useState(0);
  const [fortnightlySalary, setFortnightlySalary] = useState(0);
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (year === "2022-23") {
      setCalculated(10.5);
    }
    if (dateType === "Monthly") {
      setWeeklySalary(salary / 4);
      setFortnightlySalary(salary / 2);
      setMonthlySalary(salary);
      setAnnualSalary(salary * 12);
    }
    else(dateType === "Monthly" && checkSuperAnnuation === "checked"){
      setWeeklySalary(salary / 4)-10;

    }
  };
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={6} sm={12} className="gx-0">
            <div className="income-block">
              <h5>Income</h5>
              <div className="income-form">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className="salary">
                    <label htmlFor="salary">Your Salary: </label>${" "}
                    <input
                      type="number"
                      name="salaryInput"
                      defaultValue={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                    <select onChange={(e) => setDateType(e.target.value)}>
                      {dateTypes.map((data) => (
                        <option defaultValue={data.value}>{data.value} </option>
                      ))}
                    </select>
                  </div>
                  <div className="tax-year">
                    <label htmlFor="tax">Tax Year: </label>
                    <select
                      name="economicYear"
                      onChange={(e) => setYear(e.target.value)}
                    >
                      {years.map((data) => (
                        <option defaultValue={data.value}>{data.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="annuation-section">
                    <label htmlFor="annuaation">Your Salary: </label>
                    <input
                      type="number"
                      name="salaryPercent"
                      defaultValue={calculated}
                      onChange={(e) => setCalculated(e.target.value)}
                    />
                    %
                  </div>
                  <div className="calculate-btn">
                    <button>Calculate</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12} className="gx-0">
            <div className="option-block">
              <h5>Options</h5>
              <div className="option-check">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkSuperAnnuation"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Includes Superannuation
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkNonResident"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Non-Resident
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkWorkingHoliday"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Working Holiday Visa
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkNoTaxFree"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    No tax-free threshold
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="helpAndTsl"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    HELP and TSL
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkStudentLoan"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Student Loan
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkWithHoldTax"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Withhold Tax Offsets
                  </label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>2021 - 2022</th>
                <th>Weekly</th>
                <th>Fortnightly</th>
                <th>Monthly</th>
                <th>Annually</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pay</td>
                <td>{weeklySalary}</td>
                <td>{fortnightlySalary}</td>
                <td>{monthlySalary}</td>
                <td>{annualSalary}</td>
              </tr>
              <tr>
                <td>Taxable Income</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Superannuation *</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Total Taxes</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Income Tax</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Medicare1</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Other taxes and Levies2</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Tax Offsets3</td>
                <td>12</td>
                <td>121</td>
                <td>1234</td>
                <td>123</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default TaxCalculator;
