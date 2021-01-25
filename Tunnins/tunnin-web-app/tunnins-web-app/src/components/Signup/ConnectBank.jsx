import React, { useState, useEffect } from 'react';

import { Row, Col, Label, Input, Button } from 'reactstrap';

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
    console.log("Connect ank: ", connectbank);

    const routeTo=(location)=>{
        props.history.push(location);
    }

    const getConnectBank=()=> {
        if(connectbank.hasOwnProperty('data')) {
            return(
                <div className="container">
                    <h5 className="heading">
                        {connectbank.data.heading}
                    </h5>
                    <h6 className="subheading">
                        {connectbank.data.subHeading}
                    </h6>
                    <p className="label">
                        {connectbank.data.label}
                    </p>
                    <Input type="text" />
                    <Button onClick={()=>routeTo(connectbank.data.route)}>
                        {connectbank.data.btnText}
                    </Button>
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