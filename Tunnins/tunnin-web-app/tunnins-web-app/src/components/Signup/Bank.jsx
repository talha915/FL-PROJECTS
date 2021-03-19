import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { signup_bank, signed_bank } from '../../constants/constants';

// Style
import '../../styles/signupBank.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { signUpBank } from '../../actions/signupBank';

// Router
import { withRouter } from 'react-router-dom';

function Bank(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSignupBank();
    }, [])

    const dispatchSignupBank=()=> {
        dispatch(signUpBank(signup_bank, null));
    }

    const signupbank = useSelector(state => state.signupBank);

    const getSignUpBank=()=> {
        if(signupbank.hasOwnProperty('data')) {
            return(
                <div className="container">
                    <h5 className="heading">
                        {signupbank.data.heading}
                        <img src={logo} alt="Logo" />
                    </h5>
                    <h6 className="subheading">
                        {signupbank.data.subHeading}
                    </h6>
                    <div>
                        <div className="country-heading">
                            <Label for="countries">{signupbank.data.country}</Label>
                            <select className="form-control" name="select" id="countries" onChange={(event)=>selectedValue(event)}>
                                {getSelection(signupbank.data)}
                            </select>
                        </div>
                    </div>
                    <div className="next-btn-wrapper">
                        <Button color="primary" size="lg" onClick={()=>routeTo(signupbank.data.route)}>
                            {signupbank.data.btnText}
                        </Button>
                    </div>
                </div>
            )
        }
    }

    const routeTo=(data)=> {
        dispatch(signUpBank(signed_bank, country));
        props.history.push(data);
    }

    let country;

    const selectedValue=(event)=> {
        country = event.target.value;
    }

    const getSelection=(data)=> {
        let dropDown = data.countryList.map((item, index)=> {
            return(
                <option key={index} value={item.value}>
                    {item.name}
                </option>
            )
        })
        return dropDown;
    }

    return(
        <div className="signup-bank">
            {getSignUpBank()}
        </div>
    )
}

export default withRouter(Bank);