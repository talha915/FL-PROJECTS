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
import { setting_terms } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Terms(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_terms));
    }

    const getSettings = useSelector(state => state.settings);

    const getTerms = () => {
        if (getSettings.hasOwnProperty('terms')) {
            let settingTerms = getSettings.terms;
            return (
                <div className="terms">
                    <h5>
                        {settingTerms.title}
                    </h5>
                    <p>
                        {settingTerms.description}
                    </p>
                    <p>
                        {settingTerms.descriptionFooter}
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
                                {getTerms()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Terms);