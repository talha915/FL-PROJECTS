import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import signed_up from '../../constants/constants';
import verify_type from '../../constants/constants';
// Router
import { useLocation } from "react-router-dom";

// Actions
import { SignedUp } from '../../actions/signedUp';
import { VerifyAction } from '../../actions/verify';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Style
import '../../styles/verified.scss';

function Verify() {

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

    const verifiedData = useSelector(state => state);
    

    const getVerified=()=> {
        if(verifiedData.hasOwnProperty('verify')) {
            return(
                <div>
                    <h3 className="heading">
                        {verifiedData.verify.data.heading}
                    </h3>
                    <p className="text">
                        {verifiedData.verify.data.msg}
                    </p>
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

export default Verify;