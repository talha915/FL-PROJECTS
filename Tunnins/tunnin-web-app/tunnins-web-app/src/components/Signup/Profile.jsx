import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button, FormGroup } from 'reactstrap';

import Checkbox from "react-custom-checkbox";

import logo from '../../images/tunnin-logo.png';
// Constants
import { signup_profile } from '../../constants/constants';

// Style
import '../../styles/signupprofile.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { signUpProfile } from '../../actions/signupProfile';

// Router
import { withRouter } from 'react-router-dom';

function Profile(props) {

    useEffect(() => {
        dispatchSignUpProfile();
    }, [])

    const dispatchSignUpProfile = () => {
        dispatch(signUpProfile(signup_profile));
    }

    const dispatch = useDispatch();
    const profile = useSelector(state => state.signupProfile);

    const getProfile=()=> {
        if(profile.hasOwnProperty('data')) {
            return(
                <div className="container">
                    <h3 className="heading">
                        {profile.data.heading}
                        <img src={logo} alt="Logo" />
                    </h3>
                    <h5 className="subheading">
                        {profile.data.subHeading}
                    </h5>
                    <Row className="signup-second-form-wrapper">
                        {formList(profile.data)}
                        <Col className="offset-md-7" xs="12" sm="5" md="5" lg="5">
                            <Label className="formheading"><p>{profile.data.categories}</p></Label>
                            <div className="checkbox-wrapper">
                            {formChecks(profile.data)}   
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center" xs="12">
                        <Button color="primary" size="lg" onClick={()=>routeTo(profile.data.route)}>
                            {profile.data.btnText}
                        </Button>
                        </Col>
                    </Row>
                    
                </div>
            )
        }
    }

    const routeTo=(data)=> {
        props.history.push(data);
    }

    const formChecks=(data)=> {
        let checks = data.catFields.map((item, index)=> {
            return (
                <div  className="checkboxes" key={index}>
                    <Checkbox
                        value={item.value}
                        key={index} 
                        name="subscription-checkbox"
                        checked={false}
                        borderColor="#fff"
                        borderWidth={3}
                        borderRadius={3}
                        style={{cursor: "pointer",}}
                        labelStyle={{ marginLeft: 5, userSelect: "none", color: "#fff" }}
                        label={item.name} 
                    />
                </div>
            )
        })
        return checks;
    }

    const formList=(data)=> {
        let formFields = data.formFields.map((item, index)=> {
            return(
                <Col xs="12" sm="5" md="5" lg="5" key={index}>
                     <FormGroup className="mb-4">
                    <Label className="formheading"><p>{item.labelName}</p></Label>
                    {item.type == 'textarea' ?
                        <Input type={item.type} placeholder={item.placeholder} className="form-control" sm={4}/>
                        :
                        <input type={item.type} placeholder={item.placeholder} className="form-control" />
                    }     
                    </FormGroup>                 
                              
                </Col>
            )
        })
        return formFields;
    }

    return(
        <div className="profile">
            {getProfile()}
        </div>
    )
}

export default withRouter(Profile);