import React, { useEffect } from 'react';

import { Label, Input, Button, FormGroup } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { connect_bank, account_number, create_user, get_auth, notification_route } from '../../constants/constants';

// Style
import '../../styles/connectBank.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { connectBank } from '../../actions/connectBank';
import { postFetch } from '../../actions/postFetch';

// Router
import { withRouter } from 'react-router-dom';
import { fine_res } from '../../constants/api_env';

function ConnectBank(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchConnectBank();
    }, [])

    const dispatchConnectBank = () => {
        dispatch(connectBank(connect_bank, null));
    }

    const connectbank = useSelector(state => state.connectBank);

    const allStates = useSelector(state => state);

    const routeTo=(location)=> {
        console.log("State: ", allStates);
        let bodyFormData = new FormData();
        bodyFormData.append("fullName", allStates.signedup.f_name);
        bodyFormData.append("username", allStates.signupProfile.signedUpProfile.username);
        bodyFormData.append("email", allStates.signedup.email);
        bodyFormData.append("password", allStates.signedup.c_pass);
        bodyFormData.append("userType", "trainer");
        bodyFormData.append("dob", allStates.signedup.dob);
        bodyFormData.append("trainer_Cat", allStates.signupProfile.signedUpProfile.trainer_cat);
        //bodyFormData.append("profilePic", "abc xyz");
        bodyFormData.append("about", allStates.signupProfile.signedUpProfile.about);


        dispatch(postFetch(create_user, bodyFormData));

            
    }

    const loginUser=()=> {
        let form = {
            "username": allStates.signupProfile.signedUpProfile.username,
            "password": allStates.signedup.c_pass
        }
        dispatch(postFetch(get_auth, form));
    }

    const userInfo = useSelector(state => state.postFetch);
    
    if(userInfo.hasOwnProperty('userLogged')) {
        props.history.push(notification_route);
    }

    if (allStates.postFetch.hasOwnProperty('userCreatedStatus')) {
        let userCheck = allStates.postFetch.userCreatedStatus;
        console.log("UserCheck", userCheck);
        if (userCheck === fine_res) {
            loginUser();
            //props.history.push(location);
        }
        else {
            console.log("Error: ", userCheck);
        }
    }
    

    

    const getConnectBank = () => {
        if (connectbank.hasOwnProperty('data')) {
            return (
                <div className="container">
                    <h5 className="heading">
                        {connectbank.data.heading}
                        <img src={logo} alt="Logo" />
                    </h5>
                    <h6 className="subheading">
                        {connectbank.data.subHeading}
                    </h6>
                    <p>
                    </p>
                    <FormGroup className="connect-input-wrapper">
                        <Label className="label" for="connect-bank">{connectbank.data.label}</Label>
                        <Input id="connect-bank" type="text" onChange={(event) => selectedValue(account_number, event.target.value)} />
                    </FormGroup>
                    <div className="next-btn-wrapper">
                        <Button color="primary" size="lg" onClick={() => routeTo(connectbank.data.route)}>
                            {connectbank.data.btnText}
                        </Button>
                    </div>
                </div>
            )
        }
    }

    const selectedValue = (field, data) => {
        dispatch(connectBank(field, data));
    }

    return (
        <div className="connect-bank">
            {getConnectBank()}
        </div>
    )
}

export default withRouter(ConnectBank);