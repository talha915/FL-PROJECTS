import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_about } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function About(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_about));
    }

    const getSettings = useSelector(state => state.settings);

    const getAbout = () => {
        if (getSettings.hasOwnProperty('about')) {
            let about = getSettings.about;
            return (
                <div className="about">
                    <h5>
                        {about.title}
                    </h5>
                    <p>
                        {about.description}
                    </p>
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
                                {getAbout()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(About);