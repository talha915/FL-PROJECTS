import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button, FormGroup } from 'reactstrap';

import logo from '../../images/tunnin-logo.png';

// Constants
import { connect_bank } from '../../constants/constants';

// Style
import '../../styles/connectBank.scss';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { connectBank } from '../../actions/connectBank';

// Router
import { withRouter } from 'react-router-dom';

function ConnectBank(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchConnectBank();
    }, [])

    const dispatchConnectBank=()=> {
        dispatch(connectBank(connect_bank));
    }

    const connectbank = useSelector(state => state.connectBank);

    const routeTo=(location)=>{
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
                    <p >
                        
                    </p>
                    <FormGroup className="connect-input-wrapper">
                        <Label className="label" for="connect-bank">{connectbank.data.label}</Label>
                        <Input id="connect-bank" type="text" />
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

    return(
        <div className="connect-bank">
            {getConnectBank()}
        </div>
    )
}

export default withRouter(ConnectBank);