import React, { useEffect } from 'react';

import { Label, Input, Button, FormGroup } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { connect_bank, account_number, create_user } from '../../constants/constants';

// Style
import '../../styles/connectBank.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { connectBank } from '../../actions/connectBank';
import { postFetch } from '../../actions/postFetch';

// Router
import { withRouter } from 'react-router-dom';

function ConnectBank(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchConnectBank();
    }, [])

    const dispatchConnectBank=()=> {
        dispatch(connectBank(connect_bank, null));
    }

    const connectbank = useSelector(state => state.connectBank);

    const allStates = useSelector(state => state);

    const routeTo=(location)=>{
        console.log("State: ", allStates);
        let bodyFormData = new FormData();
        bodyFormData.append("fullName", "abc xyz");
        bodyFormData.append("username", "abc123");
        bodyFormData.append("email", "a@a.com");
        bodyFormData.append("password", "12345");
        bodyFormData.append("userType", "trainer");
        bodyFormData.append("dob", "31/02/2018");
        bodyFormData.append("trainer_Cat", "60179ea9423e662bb0ed0e6e");
        bodyFormData.append("profilePic", "abc xyz");
        let createUser = {
            'fullName': 'abc xyz',
            'username':'abc123',
            'email': 'a@a.com',
            'password': '12345',
            'userType': 'user',
            // 'dob': '31/02/2018',
            'trainer_Cat': '60179ea9423e662bb0ed0e6e',
            // 'profilePic': './logo192.png'
        }
        //dispatch(postFetch(create_user, createUser));
        props.history.push(location);
    }

    const getConnectBank=()=> {
        if(connectbank.hasOwnProperty('data')) {
            return(
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
                        <Input id="connect-bank" type="text" onChange={(event)=>selectedValue(account_number, event.target.value)} />
                    </FormGroup>
                    <div className="next-btn-wrapper">
                        <Button color="primary" size="lg" onClick={()=>routeTo(connectbank.data.route)}>
                            {connectbank.data.btnText}
                        </Button>
                    </div>
                </div>
            )
        }
    }

    const selectedValue=(field, data)=> {
        dispatch(connectBank(field, data));
    }

    return(
        <div className="connect-bank">
            {getConnectBank()}
        </div>
    )
}

export default withRouter(ConnectBank);