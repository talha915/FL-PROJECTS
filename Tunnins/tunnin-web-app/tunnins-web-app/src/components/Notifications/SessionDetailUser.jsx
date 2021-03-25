import React, { useEffect, useState } from 'react';
import {
    Button, Row, Col, Card, CardText, CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Styles
import '../../styles/notifications.scss';

// Components
import Header from '../Header/Header';
import Sliders from './Sliders';
import CancelledPolicy from '../Session/CancelPolicy';

function SessionDetailUser(props) {

    let data = props.location.state;
    console.log("Data: ", data);
    
    const getDetails=()=> {
        return(
            <Row className="session-detail-wrapper">
                <Col sm="3">
                    <p className="session-heading">
                        {data.heading}
                    </p>
                    <p className="session-type">
                        {data.cName}
                    </p>
                    <p className="session-date-time">
                    <i className="icon-ic_clock pr-2"></i>
                        {data.time}
                    </p>
                    <p className="session-date-time">
                        <i className="icon-ic_calendar  pr-2"></i>
                        {data.date}
                    </p>
                </Col>
                <Col  sm="3">
                    <p className="session-info-heading">
                        {data.need}
                    </p>
                    <p className="session-info-content">
                        {data.needContent}
                    </p>
                </Col>
                <Col  sm="3">
                    <p className="session-info-heading">
                        {data.about}
                    </p>
                    <p className="session-info-content">
                        {data.aboutContent}
                    </p>
                </Col>
            </Row>
        )
    }

    const seeCancelPolicy=()=> {
        props.history.push('/cancellation-policy');
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <div className="session-user-right-container">
                    <Row className="mb-5">
                        <Col className="d-flex align-items-center col-sm-3 pl-5">
                            <h6 className="title m-0">
                                <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
                                Sessions Details
                            </h6>
                        </Col>
                        {/* <Col className="add-btn-wrapper col-sm-9">
                            <span>
                            <Button className="addBtn">
                                Cancel Session
                            </Button>
                            </span>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col>
                            <Sliders />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="session-info">
                                <span className="session-status">
                                   <span className={data.statusDetail}>
                                    <i className={data.statusIcon}></i>
                                   </span>
                                    {data.statusDetail}
                                </span>
                                <span className="session-amount">
                                    {data.amount}
                                </span>
                                <span className="cancel-policy-link" onClick={()=>seeCancelPolicy()}>
                                    {data.cancelPolicy}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    {getDetails()}
                </div>
            </div>
        </div>
    )
}

export default withRouter(SessionDetailUser);