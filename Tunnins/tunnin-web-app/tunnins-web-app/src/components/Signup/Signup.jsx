import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button, FormGroup} from 'reactstrap';

import Checkbox from "react-custom-checkbox";

import logo from '../../images/tunnin-logo.png';

// Constants
import { sign_up } from '../../constants/constants';
import signed_up from '../../constants/constants';

// Actions
import { Signup } from '../../actions/Signup';

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
                        <img src={logo} alt="Logo" />
                    </h2>
                    <p className="subheading">
                        {signupState.data.subHeading}
                    </p>
                    <Row className="signup-first-form-wrapper">
                        {formDetail(signupState.data)}
                        <Col xs="12" sm="5" md="5" lg="5">
                            <FormGroup className="subscription-checkbox-wrapper ">
                                <Checkbox
                                    name="subscription-checkbox"
                                    checked={false}
                                    onChange={(e)=>handleChange('subscribe', e.target.checked)}
                                    borderColor="#fff"
                                    borderWidth={3}
                                    borderRadius={3}
                                    style={{cursor: "pointer",}}
                                    labelStyle={{ marginLeft: 5, userSelect: "none", color: "#fff" }}
                                    label={signupState.data.subscribe}
                                />
                            </FormGroup>
                        </Col>
                        <Col className="d-flex justify-content-center" xs="12">
                            <Button color="primary" size="lg" onClick={()=>formValue(signupState.data)} >
                                {signupState.data.btnText}
                            </Button>
                        </Col>
                    </Row>
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
        if(Object.keys(form).length > 0) {
            props.history.push({
                pathname: data.route,
                routeData: form
            });
        }
    }
    
    const formDetail = (data) => {
        let formDetails = data.details.map((item, index) => {
            return (
                <Col xs="12" sm="5" md="5" lg="5" key={index}>
                    <FormGroup className="custom-input-wrapper mb-5">
                        <Label className="formheading"><p>{item.name}</p></Label>                      
                        <input type={item.type} placeholder={item.placeholder} className="form-control" onChange={(e)=>handleChange(item.field, e.target.value)}/> 
                        <span className="input-icons secondary"><i className="icon-mail"></i></span>    
                    </FormGroup>     
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