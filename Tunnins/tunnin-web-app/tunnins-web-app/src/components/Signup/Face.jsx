import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

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

function Face(props) {

    const dispatch = useDispatch();
    const signUpFace = useSelector(state => state.profileFace);

    useEffect(() => {
        dispatchProfileFace();
    }, [])

    const dispatchProfileFace = () => {
        dispatch(profileFace(profile_face));
    }

    const getProfileFace = () => {
        if (signUpFace.hasOwnProperty('data')) {
            return (
                <div className="container">
                    <h5 className="heading">
                        {signUpFace.data.heading}
                        <img src={logo} alt="Logo" />
                    </h5>
                    <h6 className="subheading">
                        {signUpFace.data.subHeading}
                    </h6>
                    <h6 className="upload-heading">
                        {signUpFace.data.upload}
                    </h6>
                    <div className="d-flex">
                        {uploads(signUpFace.data)}
                    </div>
                    <div className="next-btn-wrapper">
                        <Button color="primary" size="lg" onClick={()=>routeTo(signUpFace.data.route)}>
                            {signUpFace.data.btnText}
                        </Button>
                    </div>
                </div>
            )
        }
    }

    const routeTo=(data)=> {
        props.history.push(data);
    }

    const uploads=(data)=> {
        let uploads = data.imageList.map((item, index)=> {
            return(
                <div className="uploads" key={index}>
                    <span className="upload-icon-wrapper"><i className="icon-cloud"></i></span>
                    <p>{item.label}</p>
                </div>
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