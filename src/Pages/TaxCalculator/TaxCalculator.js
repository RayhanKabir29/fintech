import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./TaxCalculator.css";

const TaxCalculator = () => {
  const [salary, setSalary] = useState();
  const [dateTypes, setDateTypes] = useState([
    { value: "Select Payment Type" },
    { value: "Weakly" },
    { value: "Fortnight" },
    { value: "Monthly" },
    { value: "Yearly" },
  ]);
  const [years, setYears] = useState([
    { value: "Select Economic Year" },
    { value: "2021-22" },
    { value: "2022-23" },
    { value: "2023-24" },
  ]);
  const [year, setYear] = useState(null);
  const [dateType, setDateType] = useState(null);
  const [calculated, setCalculated] = useState(0);

  const [weeklySalary, setWeeklySalary] = useState(0);
  const [fortnightlySalary, setFortnightlySalary] = useState(0);
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(0);

  const [weaklyTaxableIncome, setWeaklyTaxableIncome] = useState(0);
  const [fortnightlyTaxableIncome, setFortnightlyTaxableIncome] = useState(0);
  const [monthlyTaxableIncome, setMonthlyTaxableIncome] = useState(0);
  const [annualTaxableIncome, setAnnualTaxableIncome] = useState(0);

  const [weaklySuperAnnuation, setWeaklySuperAnnuation] = useState(0);
  const [fortnightlySuperAnnuation, setFortnightlySuperAnnuation] = useState(0);
  const [monthlySuperAnnuation, setMonthlySuperAnnuation] = useState(0);
  const [annualSuperAnnuation, setAnnualSuperAnnuation] = useState(0);

  const [weaklyTotalTax, setWeaklyTotalTax] = useState(0);
  const [fortnightlyTotalTax, setFortnightlyTotalTax] = useState(0);
  const [monthlyTotalTax, setMonthlyTotalTax] = useState(0);
  const [annualTotalTax, setAnnualTotalTax] = useState(0);

  const [weaklyIncomeTax, setWeaklyIncomeTax] = useState(0);
  const [fortnightlyIncomeTax, setFortnightlyIncomeTax] = useState(0);
  const [monthlyIncomeTax, setMonthlyIncomeTax] = useState(0);
  const [annualIncomeTax, setAnnualIncomeTax] = useState(0);

  const [weaklyMediCare, setWeaklyMediCare] = useState(0);
  const [fortnightlyMediCare, setFortnightlyMediCare] = useState(0);
  const [monthlyMediCare, setMonthlyMediCare] = useState(0);
  const [annualMediCare, setAnnualMediCare] = useState(0);

  const [weaklyOtherTax, setWeaklyOtherTax] = useState(0);
  const [fortnightlyOtherTax, setFortnightlyOtherTax] = useState(0);
  const [monthlyOtherTax, setMonthlyOtherTax] = useState(0);
  const [annualOtherTax, setAnnualOtherTax] = useState(0);

  const [weaklyTaxOffset, setWeaklyTaxOffset] = useState(0);
  const [fortnightlyTaxOffset, setFortnightlyTaxOffset] = useState(0);
  const [monthlyTaxOffset, setMonthlyTaxOffset] = useState(0);
  const [annualTaxoffset, setAnnualTaxOffset] = useState(0);

  const options = [
    {
      label: "Includes Superannuation",
      isChecked: false,
      value: "includes-superannuation",
    },
    {
      label: "Non-Resident",
      isChecked: false,
      value: "non-resident",
    },

    {
      label: "Working Holiday Visa",
      isChecked: false,
      value: "working-holiday-visa",
    },
    {
      label: "No tax-free threshold",
      isChecked: false,
      value: "no-tax-free-threshold",
    },
    { label: "HELP and TSL", isChecked: false, value: "help-and-tsl" },
    { label: "Student Loan", isChecked: false, value: "student-loan" },
    {
      label: "Withhold Tax Offsets",
      isChecked: false,
      value: "withhold-tax-offsets",
    },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (year === "2021-22") {
      setCalculated(10);
    } else if (year === "2022-23") {
      setCalculated(10.5);
    } else if (year === "2023-24") {
      setCalculated(11);
    }
    const checkedItems = options.filter((item) => item.isChecked === true);
    var additionalCharge = 0;
    checkedItems.forEach((el) => {
      if (el.value === "includes-superannuation") {
        additionalCharge += 5;
      }
      if (el.value === "non-resident") {
        additionalCharge += 7;
      }
      if (el.value === "working-holiday-visa") {
        additionalCharge += 3;
      }
      if (el.value === "no-tax-free-threshold") {
        additionalCharge += 4;
      }
      if (el.value === "help-and-tsl") {
        additionalCharge += 6;
      }
      if (el.value === "student-loan") {
        additionalCharge += 8;
      }
      if (el.value === "withhold-tax-offsets") {
        additionalCharge += 9;
      }
    });
    if (dateType === "Weakly") {
      setWeeklySalary(salary / 1 + additionalCharge);
      setWeaklyTaxableIncome(salary / 1 - 50);
      setWeaklySuperAnnuation(0);
      setWeaklyTotalTax(0);
      setWeaklyIncomeTax(0);
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary * 2 + additionalCharge);
      setFortnightlyTaxableIncome(salary * 2 - 50);
      setFortnightlySuperAnnuation(0);
      setFortnightlyTotalTax(0);
      setFortnightlyIncomeTax(0);
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary * 4 + additionalCharge);
      setMonthlyTaxableIncome(salary * 4 - 50);
      setMonthlySuperAnnuation(0);
      setMonthlyTotalTax(0);
      setMonthlyIncomeTax(0);
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 52 + additionalCharge);
      setAnnualTaxableIncome(salary * 52 - 50);
      setAnnualSuperAnnuation(0);
      setAnnualTotalTax(0);
      setAnnualIncomeTax(0);
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Fortnight") {
      setWeeklySalary(salary / 2 + additionalCharge);
      setWeaklyTaxableIncome(salary / 2 - 50);
      setWeaklySuperAnnuation(0);
      setWeaklyTotalTax(0);
      setWeaklyIncomeTax(0);
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary / 1 + additionalCharge);
      setFortnightlyTaxableIncome(salary / 1 - 50);
      setFortnightlySuperAnnuation(0);
      setFortnightlyTotalTax(0);
      setFortnightlyIncomeTax(0);
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary * 2 + additionalCharge);
      setMonthlyTaxableIncome(salary * 2 - 50);
      setMonthlySuperAnnuation(0);
      setMonthlyTotalTax(0);
      setMonthlyIncomeTax(0);
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 26 + additionalCharge);
      setAnnualTaxableIncome(salary * 26 - 50);
      setAnnualSuperAnnuation(0);
      setAnnualTotalTax(0);
      setAnnualIncomeTax(0);
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Monthly") {
      setWeeklySalary(salary / 4 + additionalCharge);
      setWeaklyTaxableIncome(salary / 4 - 50);
      setWeaklySuperAnnuation(0);
      setWeaklyTotalTax(0);
      setWeaklyIncomeTax(0);
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary / 2 + additionalCharge);
      setFortnightlyTaxableIncome(salary / 2 - 50);
      setFortnightlySuperAnnuation(0);
      setFortnightlyTotalTax(0);
      setFortnightlyIncomeTax(0);
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary / 1 + additionalCharge);
      setMonthlyTaxableIncome(salary / 1 - 50);
      setMonthlySuperAnnuation(0);
      setMonthlyTotalTax(0);
      setMonthlyIncomeTax(0);
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 12 + additionalCharge);
      setAnnualTaxableIncome(salary * 12 - 50);
      setAnnualSuperAnnuation(0);
      setAnnualTotalTax(0);
      setAnnualIncomeTax(0);
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Yearly") {
      setWeeklySalary(salary / 52 + additionalCharge);
      setWeaklyTaxableIncome(salary / 52 - 50);
      setWeaklySuperAnnuation(0);
      setWeaklyTotalTax(0);
      setWeaklyIncomeTax(0);
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary / 26 + additionalCharge);
      setFortnightlyTaxableIncome(salary / 26 - 50);
      setFortnightlySuperAnnuation(0);
      setFortnightlyTotalTax(0);
      setFortnightlyIncomeTax(0);
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary / 12 + additionalCharge);
      setMonthlyTaxableIncome(salary / 12 - 50);
      setMonthlySuperAnnuation(0);
      setMonthlyTotalTax(0);
      setMonthlyIncomeTax(0);
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary / 1 + additionalCharge);
      setAnnualTaxableIncome(salary / 1 - 50);
      setAnnualSuperAnnuation(0);
      setAnnualTotalTax(0);
      setAnnualIncomeTax(0);
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
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
                      value={calculated}
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
                {options.map((option, index) => (
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onChange={() => (option.isChecked = !option.isChecked)}
                      defaultChecked={option.isChecked}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{year}</th>
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
                <td>{weaklyTaxableIncome}</td>
                <td>{fortnightlyTaxableIncome}</td>
                <td>{monthlyTaxableIncome}</td>
                <td>{annualTaxableIncome}</td>
              </tr>
              <tr>
                <td>Superannuation *</td>
                <td>{weaklySuperAnnuation}</td>
                <td>{fortnightlySuperAnnuation}</td>
                <td>{monthlySuperAnnuation}</td>
                <td>{annualSuperAnnuation}</td>
              </tr>
              <tr>
                <td>Total Taxes</td>
                <td>{weaklyTotalTax}</td>
                <td>{fortnightlyTotalTax}</td>
                <td>{monthlyTotalTax}</td>
                <td>{annualTotalTax}</td>
              </tr>
              <tr>
                <td>Income Tax</td>
                <td>{weaklyIncomeTax}</td>
                <td>{fortnightlyIncomeTax}</td>
                <td>{monthlyIncomeTax}</td>
                <td>{annualIncomeTax}</td>
              </tr>
              <tr>
                <td>Medicare1</td>
                <td>{weaklyMediCare}</td>
                <td>{fortnightlyMediCare}</td>
                <td>{monthlyMediCare}</td>
                <td>{annualMediCare}</td>
              </tr>
              <tr>
                <td>Other taxes and Levies2</td>
                <td>{weaklyOtherTax}</td>
                <td>{fortnightlyOtherTax}</td>
                <td>{monthlyOtherTax}</td>
                <td>{annualOtherTax}</td>
              </tr>
              <tr>
                <td>Tax Offsets3</td>
                <td>{weaklyTaxOffset}</td>
                <td>{fortnightlyTaxOffset}</td>
                <td>{monthlyTaxOffset}</td>
                <td>{annualTaxoffset}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default TaxCalculator;
