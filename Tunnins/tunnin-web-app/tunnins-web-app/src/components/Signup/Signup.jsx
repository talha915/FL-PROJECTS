import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import sign_up from '../../constants/constants';
import signed_up from '../../constants/constants';

// Actions
import { Signup } from '../../actions/Signup';
import { SignedUp } from '../../actions/signedUp';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { withRouter } from 'react-router-dom';

// Styles
import '../../styles/signup.scss'

function SignUp(props) {

    const dispatch = useDispatch();

    // State
    const [formVal, setForm] = useState('');

    useEffect(() => {
        dispatchSignupAction();
    }, [])

    const dispatchSignupAction = () => {
        dispatch(Signup(sign_up));
    }

    const signupState = useSelector(state => state.signup);


    const getSignUp = () => {
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
                    <Input type="checkbox" onChange={(e)=>handleChange('subscribe', e.target.checked)}/> {signupState.data.subscribe}
                    <Button onClick={()=>formValue(signupState.data)} >
                        {signupState.data.btnText}
                    </Button>
                </div>
            )
        }
    }

    let form = {};
    
    const handleChange=(key, data)=> {
        form[key] = data;
    }

    const formValue=(data)=> {
        setForm(form);
        props.history.push({
            pathname: data.route,
            routeData: data
        });
    }

    

    const formDetail = (data) => {
        let formDetails = data.details.map((item, index) => {
            return (
                <Col xs="6" sm="6" md="6" lg="6" key={index}>
                    <Label className="formheading"><p>{item.name}</p></Label>                      
                    <input type={item.type} placeholder={item.placeholder} className="form-control-lg" onChange={(e)=>handleChange(item.field, e.target.value)}/>          
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

export default withRouter(SignUp);