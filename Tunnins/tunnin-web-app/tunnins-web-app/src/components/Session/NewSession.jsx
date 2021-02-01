import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { add_session } from '../../constants/constants';

// Styles
import '../../styles/newsession.scss';

// Components
import Sidebar from '../Sidebar/Sidebar';

function AddSession() {
    return(
        <div className="new-session">
            <Row>
                <Col sm="2" className="left-container">
                    <Sidebar />
                </Col>
                <Col sm="10">
                    <Row>
                       
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddSession;