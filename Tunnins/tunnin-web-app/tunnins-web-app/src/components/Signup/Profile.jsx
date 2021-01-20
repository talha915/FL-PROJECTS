import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

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
                    </h3>
                    <h5 className="subheading">
                        {profile.data.subHeading}
                    </h5>
                    <Row>
                        {formList(profile.data)}
                    </Row>
                    <Label className="formheading"><p>{profile.data.categories}</p></Label>
                    {formChecks(profile.data)}   
                    <Button onClick={()=>routeTo(profile.data.route)}>
                        {profile.data.btnText}
                    </Button>
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
                <div key={index}>
                    <input type="checkbox" value={item.value} key={index} /> {item.name} 
                </div>
            )
        })
        return checks;
    }

    const formList=(data)=> {
        let formFields = data.formFields.map((item, index)=> {
            return(
                <Col xs="6" sm="6" md="6" lg="6" key={index}>
                    <Label className="formheading"><p>{item.labelName}</p></Label>
                    {item.type == 'textarea' ?
                        <Input type={item.type} placeholder={item.placeholder} className="form-control-lg" sm={4}/>
                        :
                        <input type={item.type} placeholder={item.placeholder} className="form-control-lg" />
                    }                      
                              
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