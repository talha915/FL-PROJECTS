import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';
import verify from '../../images/verify-email-2.png';
// Constants
import { signed_up } from '../../constants/constants';
import { verify_type } from '../../constants/constants';

// Router
import { useLocation } from "react-router-dom";

// Actions
import { SignedUp } from '../../actions/signedUp';
import { VerifyAction } from '../../actions/verify';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { withRouter } from 'react-router-dom';

// Style
import '../../styles/verified.scss';

function Verify(props) {

    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSignedupAction();
        dispatchVerify();
    }, [])

    const dispatchSignedupAction = () => {
        dispatch(SignedUp(signed_up, location));
    }

    const dispatchVerify = () => {
        dispatch(VerifyAction(verify_type));
    }

    const verifiedData = useSelector(state => state.verify);
    
    const routeToForm=(routeTo)=> {
        props.history.push(routeTo);
    }

    const getVerified=()=> {
        if(verifiedData.hasOwnProperty('data')) {
            return(
                <div className="container-fluid">
                    <div className="page-logo-wrapper">
                    <img src={logo} alt="Logo" />
                    </div>
                    <div className="verify-img">
                        <img src={verify} alt="Reset Password" />
                    </div>
                    
                    <h3 className="heading">
                        {verifiedData.data.heading}
                    </h3>
                    <p className="text">
                        {verifiedData.data.msg}
                    </p>
                    <div className="next-btn-wrapper">
                    <Button color="primary" size="lg" onClick={()=>routeToForm(verifiedData.data.route)}>
                        {verifiedData.data.btnText}
                    </Button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="verify">
            {getVerified()}
        </div>
    )
}

export default withRouter(Verify);