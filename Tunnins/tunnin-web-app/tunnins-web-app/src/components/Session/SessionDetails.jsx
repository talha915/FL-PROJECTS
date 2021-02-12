import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { sessionDetails } from '../../actions/sessionDetail';
import { sessionModal } from '../../actions/sessionModal';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { session_details, cancel_session_modal, cancelled_session_modal } from '../../constants/constants';

// Styles
import '../../styles/sessionDetails.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';
import Popup from './Popup';

function SessionDetail(props) {

    const [detailType, detailTypeAction] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatchSessionDetails();
    }, []);

    const dispatchSessionDetails=()=> {
        dispatch(sessionDetails(session_details));
    }

    const sessionDetail = useSelector(state => state.sessionDetails);
    
    const popup = useSelector(state => state.sessionModal);

    const getUpper=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            return(
                <div>
                    <Row>
                        <Col sm="6">
                            <h6>
                                {sessionDetail.data.title}
                            </h6>
                        </Col>
                        <Col sm="6">
                            {getBtns()}
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
                    <Button key={index} className="topbtn-style" onClick={()=>detailAction(data.action)}>
                        {data.title}
                    </Button>
                );
            });
            return btns;
        }
    }

    const detailAction=(data)=> {
        if(data == "cancel") {
            console.log("Cancel");
            detailTypeAction(data);
            dispatch(sessionModal(cancel_session_modal));
        }   
    }

    const getUpperCard=()=> {
        if(sessionDetail.hasOwnProperty('data')) {
            return(
                <div className="top-borderless-card">
                    <Row>
                        <Col sm="6">
                            <h6>
                                {sessionDetail.data.detailTitle}
                            </h6>
                            <p>
                                {sessionDetail.data.detailDate}
                            </p>
                            <p>
                                {sessionDetail.data.detailDate}
                            </p>
                            <p>
                                {sessionDetail.data.detailTime}
                            </p>
                            <p>
                                {sessionDetail.data.booked}
                            </p>
                            <p>
                                {sessionDetail.data.usersViewed}
                            </p>
                        </Col>
                        <Col sm="6" onClick={()=>cancelPolicy(sessionDetail.data.cancelroute)}>
                            <p>
                                {sessionDetail.data.cancellationPolicy}
                            </p>
                        </Col>
                    </Row>
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
                    <Col sm="2" key={index} style={{marginLeft: "10px"}}>
                        <Card style={{backgroundColor: "#262744"}} className="card-style">
                            <CardBody>
                                {data.name}
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
            
            <Row>
                <Col sm="2" className="left-container">
                    <Sidebar />
                </Col>
                <Col sm="10">
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
                </Col>
            </Row>    
       
        </div>
    )
}

export default withRouter(SessionDetail);