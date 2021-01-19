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

function Profile() {

    useEffect(() => {
        dispatchSignUpProfile();
    }, [])

    const dispatchSignUpProfile = () => {
        dispatch(signUpProfile(signup_profile));
    }

    const dispatch = useDispatch();
    const profile = useSelector(state => state);

    console.log("Profile", profile);

    return(
        <div className="profile">
            Profile
        </div>
    )
}

export default withRouter(Profile);