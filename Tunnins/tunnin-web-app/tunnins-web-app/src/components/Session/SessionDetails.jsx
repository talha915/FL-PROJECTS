import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col, Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionDetails } from '../../actions/sessionDetail';
import { sessionModal } from '../../actions/sessionModal';
import { getFetchParam } from '../../actions/getFetchParam';

// Router
import { withRouter } from 'react-router-dom';

import moment from 'moment';

// Constants
import { session_details, session_past_details, cancel_session_modal, cancelled_session_modal, sessionById, get_booked_users } from '../../constants/constants';

// Styles
import '../../styles/sessionDetails.scss';

// Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';
import dp from '../../images/dp.png';
import suser from '../../images/session-user.png';

function SessionDetail(props) {

    const [detailType, detailTypeAction] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchSessionDetails();
        dispatchSessionById();
        dispatchGetBookedUsers();
    }, []);


    const dispatchSessionById = () => {
        if (props.location.state.hasOwnProperty('_id')) {
            let sessionId = props.location.state._id;
            dispatch(getFetchParam(sessionById, sessionId));
        }
    }

    const dispatchGetBookedUsers=()=> {
        if (props.location.state.hasOwnProperty('_id')) {
            let sessionId = props.location.state._id;
            console.log("Session By Id: ", sessionId);
            dispatch(getFetchParam(get_booked_users, sessionId));
        }
    }

    const dispatchSessionDetails = () => {
        if (props.history.location.pathname === "/session-details-past") {
            dispatch(sessionDetails(session_past_details));
        }
        else {
            dispatch(sessionDetails(session_details));
            //dispatch(postFetch(create_session, bodyFormData));
        }
    }

    const sessionDetail = useSelector(state => state.sessionDetails);

    const popup = useSelector(state => state.sessionModal);

    const dispactedSessionById = useSelector(state => state.getApi);
    console.log("Dispatch Session Id: ", dispactedSessionById);

    const getUpper = () => {
        if (sessionDetail.hasOwnProperty('data')) {
            return (
                <div>
                    <Row className="mb-3">
                        <Col className="d-flex align-items-center col-sm-3">
                            <h6 className="title m-0">
                                <i className="icon-chevron-left" onClick={() => props.history.goBack()}></i>
                                {sessionDetail.data.title}
                            </h6>
                        </Col>
                        <Col className="add-btn-wrapper col-sm-9">
                            <span>
                                {getBtns()}
                            </span>
                        </Col>
                    </Row>
                </div>
            )
        }
    }

    const getBtns = () => {
        if (sessionDetail.hasOwnProperty('data')) {
            let btns = sessionDetail.data.btns.map((data, index) => {
                return (
                    <span key={index}>
                        {data.flag ?
                            <Button className="topbtn-style addBtn" onClick={() => detailAction(data)}>
                                {data.title}
                            </Button>
                            :
                            ''
                        }
                    </span>
                );
            });
            return btns;
        }
    }

    const detailAction = (type) => {
        let data = type.action;
        if (data == "cancel") {
            detailTypeAction(data);
            dispatch(sessionModal(cancel_session_modal));
            if(dispactedSessionById.hasOwnProperty('sessionByIdRes')) {
                let ids = dispactedSessionById.sessionByIdRes.data.Session;
                console.log("IDs: ", ids);
            }
        }
        else {
            props.history.push(type.route);
        }
    }

    const getUpperCard = () => {
        console.log("Session: ", dispactedSessionById);
        if (dispactedSessionById.hasOwnProperty('sessionByIdRes')) {
            let sessionById = dispactedSessionById.sessionByIdRes;
            if (sessionById.hasOwnProperty('data')) {
                let res = sessionById.data;
                console.log("Final Res: ", res);
                // let date = new Date(JSON.parse(res.Session.fromDate));
                // let fromDate = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
                // let fromTime = new Date(fromDate + " " + res.Session.fromTime).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
                // let toTime = new Date(fromDate + " " + res.Session.toTime).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
                
                let fromDate = moment(res.Session.fromDate, "x").format("DD MMMM, YYYY");
                let fromTime = moment(res.Session.fromTime,'HHmmss').format("hh:mm A");
                let toTime = moment(res.Session.toTime,'HHmmss').format("hh:mm A");
                
                
                return (
                    <div>
                        <div className="top-borderless-card">
                            <Row>
                                <Col sm="6">
                                    <Card body className="card-style session-info-card">
                                        <div className="card-content">
                                            <div>
                                                <CardTitle tag="h5">{res.TrainerName}</CardTitle>
                                                <CardText>{fromDate}</CardText>
                                                <CardText>{fromTime}-{toTime}</CardText>
                                            </div>
                                            <div>
                                                <CardText className="session-amount">{props.history.location.pathname === "/session-details-past" ? "Earned $" + res.Session.price : "$" + res.Session.price}</CardText>
                                                <CardText>{res.Session.userLimit} Users Booked</CardText>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                {props.history.location.pathname === "/session-details" ?
                                    <Col sm="6" className="d-flex justify-content-end align-items-end">
                                        <p className="cancel-policy-text" onClick={() => cancelPolicy(sessionDetail.data.cancelroute)}>
                                            {sessionDetail.data.cancellationPolicy}
                                        </p>
                                    </Col>
                                    :
                                    ''}
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col sm="12">
                                    <h5 className="users-booked-title">{sessionDetail.data.usersViewed}</h5>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )
            }
        }
    }

    const cancelPolicy = (location) => {
        props.history.push(location);
    }

    const getBookedUsers = () => {
        if (sessionDetail.hasOwnProperty('data')) {
            let users = sessionDetail.data.usersList.map((data, index) => {
                return (
                    <Col key={index}>
                        <Card className="card-style session-user-card">
                            <CardBody>
                                <img src={suser} alt="user-dp" />
                                <span className="session-user-name">{data.name}</span>
                            </CardBody>
                        </Card>
                    </Col>
                )
            });
            return users;
        }
    }

    return (
        <div className="session-details">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col className="mt-5">
                        <div className="session-details-right-container">
                            {getUpper()}
                            {getUpperCard()}
                            <Row>
                                {getBookedUsers()}
                                {detailType === "cancel" ?
                                    <Popup modalState={popup} ids={dispactedSessionById.sessionByIdRes.data.Session} />
                                    :
                                    ''
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default withRouter(SessionDetail);