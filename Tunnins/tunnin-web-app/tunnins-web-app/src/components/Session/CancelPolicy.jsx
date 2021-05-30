import React, { useEffect } from 'react';

// ReactStrap
import { Row, Col } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { cancelPolicy } from '../../actions/cancelPolicy';
import { getFetch } from '../../actions/getFetch';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { cancel_policy, pages } from '../../constants/constants';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

// Styles
import '../../styles/cancelpolicy.scss';

import dp from '../../images/dp.png';

function CancelledPolicy(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSessionPolicy();
        dispatchCancelPolicy();
    }, []);

    const dispatchSessionPolicy = () => {
        dispatch(cancelPolicy(cancel_policy));
    }

    const dispatchCancelPolicy=()=> {
        dispatch(getFetch(pages));
    }

    const cancelationPolicy = useSelector(state => state.cancelPolicy);
    console.log("Cons, ", cancelationPolicy);

    const getApi = useSelector(state=>state.getApi);

    const getCancelPolicyData = () => {
        if(getApi.hasOwnProperty('pagesData')) {
            let pages = getApi.pagesData;
            if(pages.hasOwnProperty('cancelPolicy')) {
                let cancelPolicy = pages.cancelPolicy;
                return (
                    <div>
                        <div className="cancel">
                            <h6 className="title m-0">
                                <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                                {cancelPolicy.title}
                            </h6>
                            <p className="cancel-policy-text">
                                {cancelPolicy.content}
                            </p>
                        </div>
                    </div>
                )
            }
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

export default withRouter(CancelledPolicy);