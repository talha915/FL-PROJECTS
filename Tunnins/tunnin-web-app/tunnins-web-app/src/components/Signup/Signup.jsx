import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input } from 'reactstrap';

// Constants
import sign_up from '../../constants/constants';

// Actions
import { Signup } from '../../actions/Signup';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Styles
import '../../styles/signup.scss'

function SignUp() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSignupAction();
    }, [])

    const dispatchSignupAction = () => {
        dispatch(Signup(sign_up));
    }

    const signupState = useSelector(state => state.signup);


    const getSignUp = () => {
        console.log("SignUp State", signupState);
        if (signupState.hasOwnProperty('data')) {
            return (
                <div className="container">
                    <h2 className="heading">
                        {signupState.data.heading}
                    </h2>
                    <p className="subheading">
                        {signupState.data.subHeading}
                    </p>
                    <Row>
                        {formDetail(signupState.data)}
                    </Row>
                </div>
            )
        }
    }

    const formDetail = (data) => {
        let formDetails = data.details.map((item, index) => {
            return (
                <Col xs="6" sm="6" md="6" lg="6" key={index}>
                    <Label className="formheading"><p>{item.name}</p></Label>                      
                    <input type={item.type} placeholder={item.placeholder} className="form-control-lg"/>                  
                </Col>
            )
        })
        return formDetails;
    }

    return (
        <div className="signup">
            {getSignUp()}
        </div>
    )
}

export default SignUp;