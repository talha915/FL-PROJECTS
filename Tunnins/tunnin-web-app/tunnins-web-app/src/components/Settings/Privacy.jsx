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
import { setting_privacy } from '../../constants/constants';

// Styles
import '../../styles/settings.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Privacy(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_privacy));
    }

    const getSettings = useSelector(state => state.settings);
    const getTermsCondition = useSelector(state => state.getApi);

    console.log("Get Settings: ", getSettings);

    const getPrivacy = () => {
        if(getSettings.hasOwnProperty('privacy')) {
            let privacy = getSettings.privacy;
            return (
                <div className="privacy">
                    <div className="settings-container">
                        <h5 className="settings-heading">
                        <i className="icon-shield"></i>
                            {privacy.title}
                        </h5>
                        <p>
                            {privacy.lastUpdated}
                        </p>
                        <p>
                            <ul>
                                {getOverView(privacy)}
                                {getPersonalData(privacy)}
                                {getCategories(privacy)}
                            </ul>    
                        </p>
                    </div>
                </div>
            );
        }
    }

    const getCategories=(data)=> {
        return(
            <p>
                <li>
                    {data.categoriesDataCollectHeading}
                </li>
                {data.categoriesDescription}
                {getCategoriesList(data.categoriesDescriptionList)}
                {data.finalCategories}
            </p>
        )
    }

    const getCategoriesList=(data) => {
        let list = data.map((item, index)=> {
            return(
                <li key={index}>
                    {item.list}
                </li>
            );
        });
        return list;
    }

    const getPersonalData=(data)=> {
        return(
            <p>
                <li>
                    {data.personalDataHeading}
                </li>
                {data.personalDataList[0].personalData}
            </p>
        )
    }

    const getOverView=(data)=> {
        let privacy = data;
        return(
            <p>
                <li>
                    {privacy.overviewHeading}
                </li>
                {getOverViewList(privacy)}
            </p>
        );
    }

    const getOverViewList=(data)=> {
        let list = data.overviewList.map((item, index)=> {
            return(
                <p key={index}>{item.overView}</p>
            )
        });
        return list;
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
                                {getPrivacy()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Privacy);