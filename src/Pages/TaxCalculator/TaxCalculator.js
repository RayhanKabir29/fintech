import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './TaxCalculator.css';

const TaxCalculator = () => {
    return (
        <div className='my-5'>
           <Container>
               <Row >
                   <Col md={6} sm={12} className='gx-0'>
                        <div className="income-block">
                            <h5>Income</h5>
                            <div className="income-form">
                                <form action="">
                                  <div className="salary">
                                  <label htmlFor="salary">Your Salary: </label>
                                    $ <input type="number" name="salaryInput"/>
                                    <select>
                                        <option value="1">Monthly</option>
                                        <option value="2">Yearly</option>
                                        <option value="3">Weakly</option>
                                        <option value="4">ForthNight</option>
                                    </select>
                                  </div>
                                  <div className="tax-year">
                                    <label htmlFor="tax">Tax Year: </label>
                                    <select name="economicYear">
                                        <option value="1">2021-2022</option>
                                        <option value="2">2021-2022</option>
                                        <option value="3">2021-2022</option>
                                        <option value="4">2021-2022</option>
                                    </select>
                                   </div>
                                   <div className="annuation-section"> 
                                   <label htmlFor="annuaation">Your Salary: </label>
                                    <input type="number" name="salaryPercent"/> %
                                   </div>
                                </form>
                            </div>
                        </div>
                   </Col>
                   <Col md={6} sm={12} className='gx-0'>
                        <div className="option-block">
                            <h5>Options</h5>
                            <div className="option-check">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkSuperAnnuation"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Includes Superannuation
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkNonResident"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Non-Resident
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkWorkingHoliday"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Working Holiday Visa
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkNoTaxFree"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    No tax-free threshold
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                    HELP and TSL
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkStudentLoan"/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    Student Loan
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkWithHoldTax"/>
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
                    <td>12</td>
                    <td>121</td>
                    <td>1234</td>
                    <td>123</td>
                    </tr>
                    <tr>
                    <td>Pay</td>
                    <td>12</td>
                    <td>121</td>
                    <td>1234</td>
                    <td>123</td>
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