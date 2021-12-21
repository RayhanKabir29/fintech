import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './TaxTable.css';

const TaxTable = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <h2 className='text-center mb-3'>Our Value-Added Prices For Every Tax Situation</h2>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                            <th>Our Services</th>
                            <th>Individuals - Starter</th>
                            <th>Individuals - Elite</th>
                            <th>Uber/Sole Trader</th>
                            <th>Business - Elite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Multiple incomes & deductions</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Salary & wages </td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Interest & dividend </td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Government payments</td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Capital Gains</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Rental properties</td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Shares & Crypto</td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>BASes (Charged Extra/Qtr)</td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td>Corporate/Business tax Return </td>
                            <td >-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            </tr>
                        </tbody>
                        </Table>
                  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TaxTable;