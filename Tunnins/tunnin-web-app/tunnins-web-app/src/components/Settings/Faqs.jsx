import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col, Collapse, CardBody, Card, CardHeader
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';
import { getFetch } from '../../actions/getFetch';
import { toggleCollapse } from '../../actions/toggleCollapse';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_faqs, all_faqs } from '../../constants/constants';

// Styles
import '../../styles/settings.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Faqs(props) {

    const toggle=(allFaqs, data, index)=>{
        dispatch(toggleCollapse(allFaqs, data, index));
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_faqs));
        dispatch(getFetch(all_faqs));
    }

    const getSettings = useSelector(state => state.settings);
    const getApi = useSelector(state=>state.getApi);

    const getFaqs = () => {
        if (getSettings.hasOwnProperty('faqs')) {
            let faqs = getSettings.faqs;
            return (
                <div className="faqs">
                    <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-communications"></i>
                            {faqs.title}
                        </h5>
                        <div className="faq-accordion">
                            {getQuestions()}
                        </div>
                    </div>
                </div>
            );
        }
    }

    const getQuestions=()=> {
        if(getApi.hasOwnProperty('allFaqs')) {
            let allFaqs = getApi.allFaqs;
            if(allFaqs instanceof Array) {
                let ques = allFaqs.map((data, index)=> {
                    return(
                        <Card key={index} onClick={()=>toggle(allFaqs, data, index)}>
                            <CardHeader>
                                {data.question}
                                <i className="icon-chevron-down"></i>
                            </CardHeader>
                            <Collapse isOpen={data.flag}>
                                <CardBody>
                                    {data.answer}
                                </CardBody>
                            </Collapse>                    
                        </Card>
                    );
                });
                return ques;
            }
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
                                {getFaqs()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(Faqs);