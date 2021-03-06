import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_contact } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Contacts(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_contact));
    }

    const getSettings = useSelector(state => state.settings);

    const getContacts = () => {
        if (getSettings.hasOwnProperty('contact')) {
            let contacts = getSettings.contact;
            return (
                <div className="contacts">
                    <h5>
                        {contacts.title}
                    </h5>
                    <p>
                        {contacts.description}
                    </p>
                    <Button>
                        {contacts.btn}
                    </Button>
                </div>
            );
        }
    }

    const getSettingSidebar = () => {
        return (
            <SettingSidebar />
        );
    }

    return (
        <div className="notifications">
            <Header />
            <div className="container-fluid">
                <Row>
                    <Col className="left-container">
                        <Sidebar />
                    </Col>
                    <Col sm="9">
                        <Row>
                            <Col sm="4">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="8">
                                {getContacts()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Contacts);