import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './TaxCalculator.css';

const TaxCalculator = () => {
    return (
        <div className='mt-5'>
           <Container>
               <Row>
                   <Col md={4} sm={12}>
                       <div className="income-info py-3">
                           <h2>Australian income tax calculator</h2>
                           <h4>Your Income</h4>   
                       </div>
                       <h5>Employment income: (after salary sacrifice, before tax)</h5>
                       <div className="incom-input d-flex pb-3">
                       <input type="text" name="" id="" />
                       <select class="form-select" aria-label="Default select example">
                        <option selected>Annualy</option>
                        <option value="1">Monthly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Weekly</option>
                        </select>
                       </div>
                       <h5>Other taxable income:</h5>
                       <div className="other-input d-flex pb-5">
                       <input type="text" name="" id="" />
                       <select class="form-select" aria-label="Default select example">
                        <option selected>Annualy</option>
                        <option value="1">Monthly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Weekly</option>
                        </select>
                       </div>
                       <h5>Financial Year:</h5>
                       <div className="finacial-year pb-5">
                       <select class="form-select" aria-label="Default select example">
                        <option selected>Annualy</option>
                        <option value="1">Monthly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Weekly</option>
                        </select>
                       </div>
                   </Col>
                   <Col md={8} sm={12}>
                       <div className="tax-info">
                       <div className="info-heading">
                               <h4>The estimated tax on your taxable income is</h4>
                               <h5>$</h5>
                           </div>
                       <Table bordered>
                        <tbody>
                            <tr>
                            <td><h5>Summary</h5></td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Annualy</option>
                                <option value="1">Monthly</option>
                                <option value="2">Fortnightly</option>
                                <option value="3">Weekly</option>
                                </select>
                            </td>
                            </tr>
                            <tr>
                                <td><h5>Your taxable income:</h5></td>
                                <td><h5>$23457</h5></td>
                            </tr>
                            <tr>
                                <td><p>Income tax payable:</p></td>
                                <td><p>$</p></td>
                            </tr>
                            <tr>
                                <td><p>Medicare levy payable:</p></td>
                                <td><p>$</p></td>
                            </tr>
                            <tr>
                                <td><h5>Your income after tax & Medicare levy:</h5></td>
                                <td><h5>$</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Your marginal tax rate:</h5></td>
                                <td><h5>$</h5></td>
                            </tr>
                            <tr>
                                <td><h5>This means for an annual income of $you pay:</h5></td>
                                <td><h5>$</h5></td>
                            </tr>
                            <tr>
                                <td><p>No tax on income between $ - $</p></td>
                                <td><p>$</p></td>
                            </tr>
                            <tr>
                                <td><h5>Income tax payable</h5></td>
                                <td><p>$</p></td>
                            </tr>
                        </tbody>
                        </Table>
                       </div>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default TaxCalculator;