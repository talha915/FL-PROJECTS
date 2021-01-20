import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

// Constants
import { profile_face } from '../../constants/constants';

// Style
import '../../styles/signupface.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { profileFace } from '../../actions/profileFace';

// Router
import { withRouter } from 'react-router-dom';

function Face() {

    const dispatch = useDispatch();
    const signUpFace = useSelector(state => state.profileFace);

    useEffect(() => {
        dispatchProfileFace();
    }, [])

    const dispatchProfileFace = () => {
        dispatch(profileFace(profile_face));
    }

    console.log("SignUpFace: ", signUpFace);

    const getProfileFace = () => {
        if (signUpFace.hasOwnProperty('data')) {
            return (
                <div className="container">
                    <h5 className="heading">
                        {signUpFace.data.heading}
                    </h5>
                    <h6 className="subheading">
                        {signUpFace.data.subHeading}
                    </h6>
                    <h6 className="upload-heading">
                        {signUpFace.data.upload}
                    </h6>
                    {uploads(signUpFace.data)}
                </div>
            )
        }
    }

    const uploads=(data)=> {
        let uploads = data.imageList.map((item, index)=> {
            return(
                <p className="uploads" key={index}>
                    {item.label}
                </p>
            )
        });
        return uploads;
    }

    return (
        <div className="signup-face">
            {getProfileFace()}
        </div>
    )
}

export default withRouter(Face);