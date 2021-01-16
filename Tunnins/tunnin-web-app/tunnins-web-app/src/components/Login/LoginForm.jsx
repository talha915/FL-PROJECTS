import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ModalPopup from './ModalPopup';

// Style
import '../../styles/login.scss';

function LoginForm(props) {

    const [loginForm, setForm] = useState({});

    useEffect(() => {
        setFormData();
    }, []);

    const setFormData = () => {
        setForm(props.formData);
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const getFormData = () => {
        if (Object.keys(loginForm).length > 0) {
            return (
                <div className="login-form">
                    <h2 className="login-form-heading">
                        {loginForm.welcomeText}
                    </h2>
                    <p className="login-form-note">
                        {loginForm.loginNote}
                    </p>
                    <Form >
                        <FormGroup>
                            <Label for="exampleEmail">{loginForm.email}</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">{loginForm.password}</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="***************" />
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> {loginForm.remember}
                            </Label>
                        </FormGroup>
                        <FormGroup check inline style={{ textAlign: "right" }}>
                            <Label check>
                                <a href="#" onClick={toggle}>{loginForm.forgot}</a>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button color="info" size="lg" >{loginForm.loginBtn}</Button>
                        </FormGroup>
                    </Form>
                    <ModalPopup isOpen={modal} loginData={loginForm}/>                 
                </div>
            )
        }
    }

    return (
        <div>
            {getFormData()}
        </div>
    )
}

export default LoginForm;