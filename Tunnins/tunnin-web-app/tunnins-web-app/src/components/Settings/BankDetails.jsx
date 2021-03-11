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
import '../../styles/settings.scss';

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
                    <div className="settings-container">
                        <h5 className="settings-heading">
                            <i className="icon-info"></i>
                            {bankDetail.title}
                        </h5>
                        <Form className="tunnin-form">
                            <Row>
                                {getBankForm()}
                            </Row>
                            <div>
                            <label> Verification Images</label>
                            <div className="uploads-btn-wrapper">
                                <span className="uploads-btn">
                                    <i className="icon-cloud"></i>
                                </span>
                                <span className="uploads-btn">
                                    <i className="icon-cloud"></i>
                                </span>
                            </div>
                            </div>
                        </Form>
                        <div className="text-center">
                            <Button color="primary" className="action-btn">
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    const getBankForm=()=> {
        if (getSettings.hasOwnProperty('bank')) {
            let form = getSettings.bank.bankform.map((data, index)=> {
                return (
                    <Col sm="6" key={index}>
                        <FormGroup>
                            <Label className="formheading">{data.title}</Label>
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
                    <Col>
                        <Row className="h-100">
                            <Col className="p-0 settings-sidebar-wrapper">
                                {getSettingSidebar()}
                            </Col>
                            <Col sm="9">
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