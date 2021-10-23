import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import data from '../Data/Data.json';
// Styles
import '../../styles/login.scss';

function Login() {
    
    const [loginform, loginData] = useState({});

    useEffect(() => {
        setLoginForm(data);
    }, []);


    const setLoginForm=(data)=> {
        loginData(data.login);
    }

    const getLoginForm=()=> {
        if(Object.keys(loginform).length > 0) {
            return getFields(loginform.formFields);
        }
    }

    const getFields=(data)=> {
        if(data instanceof Array) {
            let fields = data.map((item, index)=> {
                return(
                    <FormGroup key={index}>
                        <Input type={item.type} name={item.type} placeholder={item.placeholder}/>
                    </FormGroup>
                );
            });
            return fields;
        }
    }

    return(
        <div className="login-container">
            <Row>
                <Col md={{ size: 2, offset: 5}} sm={{ size: 2, offset: 5}}>
                    <Form className="login-form">
                        {getLoginForm()}
                    </Form>
                    <p className="forgot">{loginform.forgot}</p>
                    <Button color="primary"  block>{loginform.loginBtn}</Button>
                    <p className="sign-up">{loginform.signuptext}</p>
                </Col>
            </Row>
        </div>
    )

}
export default Login;