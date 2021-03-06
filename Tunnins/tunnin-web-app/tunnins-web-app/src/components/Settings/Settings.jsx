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
import { listed_notification } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Contacts from './Contacts';

function Settings(props) {

    return(
        <Row>
            <Col sm="3">
                <SettingSidebar />
            </Col> 
            <Col sm="9">
                <Contacts />
            </Col>
        </Row>
    )

}

export default withRouter(Settings);