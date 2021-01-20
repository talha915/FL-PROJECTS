import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import { signup_bank } from '../../constants/constants';

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
        dispatch(signUpBank(signup_bank));
    }

    const signupbank = useSelector(state => state.signupBank);

    const getSignUpBank=()=> {
        if(signupbank.hasOwnProperty('data')) {
            return(
                <div className="container">
                    <h5 className="heading">
                        {signupbank.data.heading}
                    </h5>
                    <h6 className="subheading">
                        {signupbank.data.subHeading}
                    </h6>
                    <div>
                        <p className="country-heading">
                            {signupbank.data.country}
                        </p>
                        <select name="select" onChange={(event)=>selectedValue(event)}>
                            {getSelection(signupbank.data)}
                        </select>
                    </div>
                    <Button onClick={()=>routeTo(signupbank.data.route)}>
                        {signupbank.data.btnText}
                    </Button>
                </div>
            )
        }
    }

    const routeTo=(data)=> {
        props.history.push(data);
    }

    const selectedValue=(event)=> {
        console.log("Select Value: ", event.target.value)
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