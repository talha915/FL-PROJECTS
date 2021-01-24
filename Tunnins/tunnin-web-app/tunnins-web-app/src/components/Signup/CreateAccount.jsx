import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import { connect_bank } from '../../constants/constants';

// Style
import '../../styles/login.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { connectBank } from '../../actions/connectBank';

// Router
import { withRouter } from 'react-router-dom';

function CreateAccount() {
    return (
        <div className="login-form">
            <h2 className="login-form-heading">
                {datacall.modalState.welcomeText}
            </h2>
            <p className="login-form-note">
                {datacall.modalState.heading}
            </p>
            <Form className="get-started-wrapper">
                <FormGroup className="text-center">
                    <Button color="primary" size="lg">
                        {datacall.modalState.btnText}
                    </Button>
                </FormGroup>
                <FormGroup>
                    <div className="text-center" style={{ display: "inline-block" }}>
                        <p style={{ display: "inline-block" }}>{datacall.modalState.question}</p>
                        <p style={{ display: "inline-block", cursor: "pointer" }} onClick={() => route(datacall.modalState.route)}>{datacall.modalState.signIn}</p>
                    </div>
                </FormGroup>
            </Form>
        </div>
    )
}

export default CreateAccount;