import React, { useEffect } from 'react';

// ReactStrap
import { Row, Col } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { cancelPolicy } from '../../actions/cancelPolicy';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { cancel_policy } from '../../constants/constants';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

// Styles
import '../../styles/cancelpolicy.scss';

import dp from '../../images/dp.png';

function CancelledPolicy() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSessionPolicy();
    }, []);

    const dispatchSessionPolicy = () => {
        dispatch(cancelPolicy(cancel_policy));
    }

    const cancelationPolicy = useSelector(state => state.cancelPolicy);
    console.log("Cons, ", cancelationPolicy);

    const getCancelPolicyData = () => {
        if (cancelationPolicy.hasOwnProperty('data')) {
            return (
                <div>
                    <div className="cancel">
                        <h6 className="title m-0">
                            <i className="icon-chevron-left"></i>
                            {cancelationPolicy.data.title}
                        </h6>
                        <p className="cancel-policy-text">
                            {cancelationPolicy.data.content}
                        </p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="cancel-policy">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col className="mt-5">
                        <div className="cancel-policy-right-container">
                            {getCancelPolicyData()}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CancelledPolicy;