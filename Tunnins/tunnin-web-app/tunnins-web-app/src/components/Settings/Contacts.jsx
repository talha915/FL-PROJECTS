import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { ListNotification } from '../../actions/notification';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { listed_notification } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Contacts(props) {

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col>
                        Contacts
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Contacts);