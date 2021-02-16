import React, {useEffect} from 'react';

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
import Sidebar from '../Sidebar/Sidebar';

// Styles
import '../../styles/cancelpolicy.scss';

import dp from '../../images/dp.png';

function CancelledPolicy() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatchSessionPolicy();
    }, []);

    const dispatchSessionPolicy=()=> {
        dispatch(cancelPolicy(cancel_policy));
    }

    const cancelationPolicy = useSelector(state => state.cancelPolicy);
    console.log("Cons, ", cancelationPolicy);

    const getCancelPolicyData=()=> {
        if(cancelationPolicy.hasOwnProperty('data')) {
            return(
                <Col sm="10">
                    <div className="cancel">
                        <h6>
                            {cancelationPolicy.data.title}
                        </h6>
                        <p>
                            {cancelationPolicy.data.content}
                        </p>
                    </div>
                </Col>
            )
        }
    }

    return(
        <div className="session-details">
            <div className="profile-actions d-flex align-items-center justify-content-end">
                        <div className="user-notification-wrapper">
                            <span className="icon-Group-22380">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>

                            </span>
                        </div>
                        <div className="user-profile">
                            <span className="dp-wrapper">
                            <img src={dp} alt="user-dp" />
                            </span>
                            <span className="credentials">
                                <span className="name">
                                    Sanjay Singh
                                </span>
                                <span className="email">
                                    sanjay.singh@gmail.com
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <Row>
                            <Col className="left-container">
                                <Sidebar />
                            </Col>
                            <Col sm="10" className="mt-5">
                                {getCancelPolicyData()}
                            </Col>
                        </Row>
                    </div>
        </div>
    )
}

export default CancelledPolicy;