import { objectExpression } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../images/tunnin-logo.png';


// Components
import LoginForm from './Login/LoginForm';

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

    const getLoginForm=()=> {
        if(Object.keys(loginform).length > 0) {
            return (
                <LoginForm formData={loginform}/>
            )
        }
    }

    return (
        
        <div className="login-container">
            <Row>
                <Col md="6" sm="4" className="left-login">
                    <h1 className="login-logo">
                    <img src={logo} alt="Logo" />
                    </h1>
                </Col>
                <Col md="6" sm="4" className="right-login">
                    {getLoginForm()}
                </Col>
            </Row>
        </div>
    )
}

export default Login;