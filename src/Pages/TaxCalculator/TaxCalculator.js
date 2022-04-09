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
  const [annualTaxOffset, setAnnualTaxOffset] = useState(0);

  // const checkDependencies = {
  //   "includes-superannuation": ["working-holiday-visa", "no-tax-free-threshold"],
  // };
  const [checkBoxes, setCheckBoxes] = useState([
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
  ]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (year === "2021-22") {
      setCalculated(10);
    } else if (year === "2022-23") {
      setCalculated(10.5);
    } else if (year === "2023-24") {
      setCalculated(11);
    }
    var superAnnuation = 0;
    if (year === "2021-22") {
      superAnnuation += 10;
    } else if (year === "2022-23") {
      superAnnuation += 10.5;
    } else if (year === "2023-24") {
      superAnnuation += 11;
    }
    const checkedItems = checkBoxes.filter((item) => item.isChecked === true);
    var additionalCharge = 0;
    checkedItems.forEach((el) => {
      if (el.value === "includes-superannuation") {
        if (year === "2022-23") {
          additionalCharge = (salary * 10.5) / 100;
        } else if (year === "2023-24") {
          additionalCharge = (salary * 11) / 100;
        }
      }
      if (el.value === "non-resident") {
        additionalCharge = additionalCharge + (salary * 32) / 100;
      }
      if (el.value === "working-holiday-visa") {
        additionalCharge += 0;
      }
      if (el.value === "no-tax-free-threshold") {
        additionalCharge += 0;
      }
      if (el.value === "help-and-tsl") {
        additionalCharge += 0;
      }
      if (el.value === "student-loan") {
        additionalCharge += 0;
      }
      if (el.value === "withhold-tax-offsets") {
        additionalCharge += 0;
      }
    });
    if (dateType === "Weakly") {
      setWeeklySalary(salary / 1 - additionalCharge);
      setWeaklyTaxableIncome(salary);
      setWeaklySuperAnnuation((salary * superAnnuation) / 100);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyTotalTax((salary * 32) / 100);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyIncomeTax((salary * 32) / 100);
      }
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary * 2 - additionalCharge * 2);
      setFortnightlyTaxableIncome(salary * 2);
      setFortnightlySuperAnnuation(((salary * superAnnuation) / 100) * 2);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyTotalTax(((salary * 32) / 100) * 2);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyIncomeTax(((salary * 32) / 100) * 2);
      }
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(
        Math.ceil((salary / 7) * 30 - (additionalCharge / 7) * 30)
      );
      setMonthlyTaxableIncome(Math.ceil((salary / 7) * 30));
      setMonthlySuperAnnuation(
        Math.ceil(((salary * superAnnuation) / 7 / 100) * 30)
      );
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyTotalTax(Math.ceil(((salary * 32) / 100 / 7) * 30));
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyIncomeTax(Math.ceil(((salary * 32) / 100 / 7) * 30));
      }
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 52 - additionalCharge * 52);
      setAnnualTaxableIncome(salary * 52);
      setAnnualSuperAnnuation(((salary * superAnnuation) / 100) * 52);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualTotalTax(((salary * 32) / 100) * 52);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualIncomeTax(((salary * 32) / 100) * 52);
      }
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Fortnight") {
      setWeeklySalary(salary / 2 - additionalCharge / 2);
      setWeaklyTaxableIncome(salary / 2);
      setWeaklySuperAnnuation((salary * superAnnuation) / 100);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyTotalTax((salary * 32) / 100 / 2);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyIncomeTax((salary * 32) / 100 / 2);
      }
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary / 1 - additionalCharge);
      setFortnightlyTaxableIncome(salary / 1);
      setFortnightlySuperAnnuation(((salary * superAnnuation) / 100) * 2);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyTotalTax((salary * 32) / 100);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyIncomeTax((salary * 32) / 100);
      }
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary * 2 - additionalCharge * 4);
      setMonthlyTaxableIncome(salary * 2);
      setMonthlySuperAnnuation(((salary * superAnnuation) / 100) * 4);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyTotalTax(((salary * 32) / 100) * 2);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyIncomeTax(((salary * 32) / 100) * 2);
      }
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 26 - additionalCharge * 26);
      setAnnualTaxableIncome(salary * 26);
      setAnnualSuperAnnuation(((salary * superAnnuation) / 100) * 52);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualTotalTax(((salary * 32) / 100) * 26);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualIncomeTax(((salary * 32) / 100) * 26);
      }
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Monthly") {
      setWeeklySalary(salary / 4 - additionalCharge / 4);
      setWeaklyTaxableIncome(salary / 4);
      setWeaklySuperAnnuation((salary * superAnnuation) / 100);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyTotalTax((salary * 32) / 100 / 4);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyIncomeTax((salary * 32) / 100 / 4);
      }
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(salary / 2 - additionalCharge / 2);
      setFortnightlyTaxableIncome(salary / 2);
      setFortnightlySuperAnnuation(((salary * superAnnuation) / 100) * 2);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyTotalTax((salary * 32) / 100 / 2);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyIncomeTax((salary * 32) / 100 / 2);
      }
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary / 1 - additionalCharge);
      setMonthlyTaxableIncome(salary);
      setMonthlySuperAnnuation(((salary * superAnnuation) / 100) * 4);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyTotalTax((salary * 32) / 100);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyIncomeTax((salary * 32) / 100);
      }
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary * 12 - additionalCharge * 12);
      setAnnualTaxableIncome(salary * 12);
      setAnnualSuperAnnuation(((salary * superAnnuation) / 100) * 52);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualTotalTax(((salary * 32) / 100) * 12);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualIncomeTax(((salary * 32) / 100) * 12);
      }
      setAnnualMediCare(0);
      setAnnualOtherTax(0);
      setAnnualTaxOffset(0);
    } else if (dateType === "Yearly") {
      setWeeklySalary(Math.ceil(salary / 52 - additionalCharge / 52));
      setWeaklyTaxableIncome(Math.ceil(salary / 52));
      setWeaklySuperAnnuation(Math.ceil((salary * superAnnuation) / 100 / 52));
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyTotalTax(Math.ceil((salary * 32) / 100 / 52));
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setWeaklyIncomeTax(Math.ceil((salary * 32) / 100 / 52));
      }
      setWeaklyMediCare(0);
      setWeaklyOtherTax(0);
      setWeaklyTaxOffset(0);

      setFortnightlySalary(Math.ceil(salary / 26 - additionalCharge / 26));
      setFortnightlyTaxableIncome(Math.ceil(salary / 26));
      setFortnightlySuperAnnuation(
        Math.ceil((salary * superAnnuation) / 100 / 26)
      );
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyTotalTax(Math.ceil((salary * 32) / 100 / 26));
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setFortnightlyIncomeTax(Math.ceil((salary * 32) / 100 / 26));
      }
      setFortnightlyMediCare(0);
      setFortnightlyOtherTax(0);
      setFortnightlyTaxOffset(0);

      setMonthlySalary(salary / 12 - additionalCharge / 12);
      setMonthlyTaxableIncome(salary / 12);
      setMonthlySuperAnnuation(Math.ceil(salary * superAnnuation) / 100 / 12);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyTotalTax(Math.ceil((salary * 32) / 100 / 12));
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setMonthlyIncomeTax(Math.ceil((salary * 32) / 100 / 12));
      }
      setMonthlyMediCare(0);
      setMonthlyOtherTax(0);
      setMonthlyTaxOffset(0);

      setAnnualSalary(salary / 1 - additionalCharge);
      setAnnualTaxableIncome(salary);
      setAnnualSuperAnnuation((salary * superAnnuation) / 100);
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualTotalTax((salary * 32) / 100);
      }
      if (checkedItems.some((e) => e.value === "non-resident")) {
        setAnnualIncomeTax((salary * 32) / 100);
      }
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
                    <label>Your Salary: </label>${" "}
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
                    <label>Tax Year: </label>
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
                    <label>Your Salary: </label>
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
                {checkBoxes.map((option, index) => (
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      // disabled={checkDependencies[
                      //   checkBoxes.find((item) => item.isChecked)?.value
                      // ]?.includes(option.value)}
                      // disabled={option.isChecked}
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
                <td>{annualTaxOffset}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default TaxCalculator;
