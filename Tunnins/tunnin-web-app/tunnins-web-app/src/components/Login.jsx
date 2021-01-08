import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/login.scss';

function Login() {
    return (
        <div className="login-container">
            <Row>
                <Col md="6" sm="4">
                    Tunnin
                </Col>
                <Col md="6" sm="4">
                    Login
                </Col>
            </Row>
        </div>
    )
}

export default Login;