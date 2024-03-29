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
import '../../styles/settings.scss';

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
        if(getSettings.hasOwnProperty('about')) {
            let about = getSettings.about;
            return (
                <div className="about">
                    <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-info"></i>
                            {about.title}
                        </h5>
                        <p>
                            {about.description}
                        </p>
                        <p>
                            <ul>
                                {about.detailTitle}
                                {getPoints(about)}
                            </ul>
                        </p>
                    </div>
                </div>
            );
        }
    }

    const getPoints = (data) => {
        let details = data.details.map((item, index) => {
            return (
                <li key={index}>
                    {item.content}
                </li>
            )
        });
        return details;
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
                    <Col>
                        <Row className="h-100">
                            <Col className="p-0 settings-sidebar-wrapper">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="9">
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