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
import '../../styles/settings.scss';

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
                    <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-portable-document-format"></i>
                            {settingTerms.title}
                        </h5>
                        <p>
                            {settingTerms.description}
                        </p>
                        <p>
                            {settingTerms.descriptionFooter}
                        </p>
                    </div>
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
                    <Col>
                        <Row className="h-100">
                            <Col className="p-0 settings-sidebar-wrapper">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="9">
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