import { objectExpression } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/login.css';

function Login(props) {
    
    const [heading, loginHeading] = useState('');
    const [loginform, loginData] = useState({});

    useEffect(() => {
        setHeading();
        setLoginForm();
    }, []);

    const setHeading=()=> {
        loginHeading(props.loginDetails.login.heading);
    }

    const setLoginForm=()=> {
        loginData(props.loginDetails.loginForm);
    }
    console.log("Login", loginform);
    return (
        
        <div className="login-container">
            <Row>
                <Col md="6" sm="4" className="left-login">
                    <h1 className="login-logo">
                        {heading}
                    </h1>
                </Col>
                <Col md="6" sm="4">
                    Login
                </Col>
            </Row>
        </div>
    )
}

export default Login;