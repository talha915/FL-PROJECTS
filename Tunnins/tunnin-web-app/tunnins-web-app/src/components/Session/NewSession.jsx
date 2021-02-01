import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { addSession } from '../../actions/addSession';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';

function AddSession() {

    const dispatch = useDispatch();
    const newSession = useSelector(state => state.addSession);

    useEffect(() => {
        dispatchNewSession();
    }, []);


    const dispatchNewSession = () => {
        dispatch(addSession(add_session));
    }

    const getSessionTop = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row>
                    <Col sm="6">
                        <h6 className="title">
                            {newSession.data.title}
                        </h6>
                    </Col>
                    <Col sm="6">
                        <Button className="addBtn">
                            {newSession.data.btnTitle}
                        </Button>
                    </Col>
                </Row>
            );
        }
    }

    const getImages = () => {
        if (newSession.hasOwnProperty('data')) {
            return (
                <Row>
                    <Row>
                        <p className="upload-title">
                            {newSession.data.upload}
                        </p>
                    </Row>
                    <Row>
                        {getuploads()}
                    </Row>
                </Row>
            )
        }
    }

    const getuploads=()=> {
        if (newSession.hasOwnProperty('data')) {
            let cards = newSession.data.cardList;
            let cardList = cards.map((data, index)=> {
                return(
                    <Col sm="3" key={index}>
                        <Card className="uploads">
                            {data.icon}
                        </Card>
                    </Col>
                );
            });
            return cardList;
        }
    }


    return (
        <div className="new-session">
            <Row>
                <Col sm="2" className="left-container">
                    <Sidebar />
                </Col>
                <Col sm="10">
                    {getSessionTop()}
                    
                        {getImages()}
                    
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(AddSession);