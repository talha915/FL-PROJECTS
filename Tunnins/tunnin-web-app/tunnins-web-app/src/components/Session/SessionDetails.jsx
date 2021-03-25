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

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { session_details, session_past_details, cancel_session_modal, cancelled_session_modal } from '../../constants/constants';

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

    useEffect(()=>{
        dispatchSessionDetails();
    }, []);

    const dispatchSessionDetails=()=> {
        if(props.history.location.pathname === "/session-details-past") {
            dispatch(sessionDetails(session_past_details));
        }
        else {
            dispatch(sessionDetails(session_details));
        }
    }

    const sessionDetail = useSelector(state => state.sessionDetails);
    
    const popup = useSelector(state => state.sessionModal);

    const getUpper=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            return(
                <div>
                    <Row className="mb-3">
                        <Col className="d-flex align-items-center col-sm-3">
                            <h6 className="title m-0">
                                <i className="icon-chevron-left" onClick={()=>props.history.goBack()}></i>
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

    const getBtns=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            let btns = sessionDetail.data.btns.map((data, index)=> {
                return(
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

    const detailAction=(type)=> {
        let data = type.action;
        if(data == "cancel") {
            detailTypeAction(data);
            dispatch(sessionModal(cancel_session_modal));
        }
        else {
            props.history.push(type.route);
        }   
    }

    const getUpperCard=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            return(
                <div>
                    <div className="top-borderless-card">
                        <Row>
                            <Col sm="6">
                                <Card body className="card-style session-info-card">
                                    <div className="card-content">
                                        <div>
                                            <CardTitle tag="h5">{sessionDetail.data.detailTitle}</CardTitle>
                                            <CardText>{sessionDetail.data.detailDate}</CardText>
                                            <CardText>{sessionDetail.data.detailTime}</CardText>
                                        </div>
                                        <div>
                                            <CardText className="session-amount">$21</CardText>
                                            <CardText>{sessionDetail.data.booked}</CardText>
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

    const cancelPolicy=(location)=> {
        props.history.push(location);
    }

    const getBookedUsers=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            let users = sessionDetail.data.usersList.map((data, index) => {
                return(
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
                                    <Popup modalState={popup} />  
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