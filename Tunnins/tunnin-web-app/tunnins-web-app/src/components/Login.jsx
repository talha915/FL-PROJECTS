import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/login.css';

function Login() {
    return (
        <div className="login-container">
            <Row>
                <Col md="6" sm="4" className="left-login">
                    <h3 className="login-logo">
                        Tunnin
                    </h3>
                </Col>
                <Col md="6" sm="4">
                    Login
                </Col>
            </Row>
        </div>
    )
}

export default Login;