import React, { useState, useEffect } from 'react';
import {
    Button, Row, Col, Collapse, CardBody, Card, CardHeader
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_faqs } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Faqs(props) {

    const toggle=(data, index)=>{
        dispatch(settings(data));
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_faqs));
    }

    const getSettings = useSelector(state => state.settings);

    const getFaqs = () => {
        if (getSettings.hasOwnProperty('faqs')) {
            let faqs = getSettings.faqs;
            return (
                <div className="faqs">
                    <h5>
                        {faqs.title}
                    </h5>
                    {getQuestions()}
                </div>
            );
        }
    }

    const getQuestions=()=> {
        if(getSettings.hasOwnProperty('faqs')) {
            let quesLists = getSettings.faqs.quesList;
            console.log("quesList", getSettings.faqs);
            let ques = quesLists.map((data, index)=> {
                return(
                    <Card key={index} onClick={()=>toggle(data, index)}>
                        <CardHeader>
                            {data.title}
                        </CardHeader>
                        <Collapse isOpen={data.flag}>
                            <CardBody>
                                {data.description}
                            </CardBody>
                        </Collapse>                    
                    </Card>
                );
            });
            return ques;
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