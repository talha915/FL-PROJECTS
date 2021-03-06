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
import { setting_bank } from '../../constants/constants';

// Styles
import '../../styles/notifications.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function BankDetails(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_bank));
    }

    const getSettings = useSelector(state => state.settings);

    const getBankDetails = () => {
        if (getSettings.hasOwnProperty('bank')) {
            let bankDetail = getSettings.bank;
            return (
                <div className="banks">
                    <h5>
                        {bankDetail.title}
                    </h5>
                    <Form>
                        <Row>
                            {getBankForm()}
                        </Row>
                    </Form>
                </div>
            );
        }
    }

    const getBankForm=()=> {
        if (getSettings.hasOwnProperty('bank')) {
            let form = getSettings.bank.bankform.map((data, index)=> {
                return (
                    <Col sm="6" key={index}>
                        <FormGroup className="text-center">
                        <Label className="formheading"><p>{data.title}</p></Label>
                        <Input type={data.type} size={data.size} />
                    </FormGroup>
                    </Col>
                )
            });
            return form;
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
                                {getBankDetails()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default withRouter(BankDetails);