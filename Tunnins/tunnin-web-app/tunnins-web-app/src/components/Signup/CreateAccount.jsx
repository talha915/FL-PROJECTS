import React, { useState, useEffect } from 'react';

import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { connect_bank } from '../../constants/constants';

// Style
import '../../styles/login.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

// Router
import { withRouter } from 'react-router-dom';

function CreateAccount(props) {

    const dispatch = useDispatch();

    const modalState = useSelector(state => state.updateModal);

    const route = (location) => {
        props.history.push(location);
    }

    useEffect(() => {
        dispatchClose();
    }, []);

    const dispatchClose=()=> {
        dispatch(updateModal('close'));
    }


    const getCreateAccount = () => {
        if (Object.keys(modalState).length > 0) {
            let loginForm = modalState.modalState;
            return (
                <div className="login-form">
                    <h2 className="login-form-heading">
                        {loginForm.welcomeText}
                    </h2>
                    <p className="login-form-note">
                        {loginForm.heading}
                    </p>
                    <Form className="get-started-wrapper">
                        <FormGroup className="text-center">
                            <Button color="primary" size="lg">
                                {loginForm.btnText}
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <div className="text-center" style={{ display: "inline-block" }}>
                                <p style={{ display: "inline-block" }}>{loginForm.question}</p>
                                <p style={{ display: "inline-block", cursor: "pointer" }} onClick={() => route(loginForm.route)}>{loginForm.signIn}</p>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
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
                    {getCreateAccount()}
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(CreateAccount);