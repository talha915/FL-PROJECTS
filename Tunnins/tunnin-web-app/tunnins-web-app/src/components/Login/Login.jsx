import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../../images/tunnin-logo.png';
import '../../styles/login.scss';

// Components
import LoginForm from './LoginForm';

function Login(props) {
    
    const [heading, loginHeading] = useState('');
    const [loginform, loginData] = useState({});

    useEffect(() => {
        setHeading();
        setLoginForm();
    }, []);

    const setHeading=()=> {
        loginHeading(props.loginDetails.dataState.login.heading);
    }

    const setLoginForm=()=> {
        loginData(props.loginDetails.dataState.loginForm);
    }

    const getLoginForm=()=> {
        if(Object.keys(loginform).length > 0) {
            console.log("Login Form: ", loginform);
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