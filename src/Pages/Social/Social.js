import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Social.css';

const Social = () => {
    return (
        <div>
            <div className="social-section">
                <Container>
                    <Row>
                        <div className="social">
                            <div className="facebook">
                                <h2>Facebook</h2>
                            </div>
                            <div className="twitter">
                                <h2>Twitter</h2>
                            </div>
                            <div className="google">
                                <h2>Google +</h2>
                            </div>
                            <div className="youtube">
                                <h2>Youtube</h2>
                            </div>
                            <div className="instagram">
                                <h2>Instagram</h2>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Social;