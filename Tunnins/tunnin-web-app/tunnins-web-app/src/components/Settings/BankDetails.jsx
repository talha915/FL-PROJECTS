import React, { useState, useEffect } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { settings } from '../../actions/settings';
import { postFetch } from '../../actions/postFetch';

// Router
import { withRouter } from 'react-router-dom';

// Constants
import { setting_bank, bank_details_api } from '../../constants/constants';

// Styles
import '../../styles/settings.scss';

// Components
import SettingSidebar from './Sidebar';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function BankDetails(props) {

    let bankDetailForm = {};

    const [uploadedImageFile, setUploadedFile] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatchContact();
    }, []);

    const dispatchContact = () => {
        dispatch(settings(setting_bank));
    }

    const getSettings = useSelector(state => state.settings);
    const postApi = useSelector(state => state.postFetch);

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
                                        <label htmlFor="fileUpload">
                                            <i className="icon-cloud"></i>
                                        </label>
                                        <input hidden id="fileUpload" type="file" onChange={(e)=>uploadedFile(e)} />
                                    </span>
                                    <span className="uploads-btn">
                                        <label htmlFor="fileUpload">
                                            <i className="icon-cloud"></i>
                                        </label>
                                        <input hidden id="fileUpload" type="file" onChange={(e)=>uploadedFile(e)} />
                                    </span>
                                </div>
                            </div>
                        </Form>
                        <div className="text-center">
                            <Button color="primary" className="action-btn" onClick={() => { saveDetails() }}>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    const uploadedFile=(event)=> {
        let imageFile = event.target.files[0];
        if(uploadedImageFile < 2) {
            setUploadedFile(...uploadedImageFile, imageFile);
        }
    }

    const getBankForm = () => {
        if (getSettings.hasOwnProperty('bank')) {
            let form = getSettings.bank.bankform.map((data, index) => {
                return (
                    <Col sm="6" key={index}>
                        <FormGroup>
                            <Label className="formheading">{data.title}</Label>
                            <Input type={data.type} size={data.size} onChange={(e) => { getBankDetailsField(data.title, e.target.value) }} />
                        </FormGroup>
                    </Col>
                )
            });
            return form;
        }
    }

    const getBankDetailsField = (field, data) => {
        bankDetailForm[field] = data;
    }

    const saveDetails = () => {
        let bodyFormData = new FormData();
        if (postApi.hasOwnProperty('userLogged')) {
            bodyFormData.append("userId", postApi.userLogged._id);
            bodyFormData.append("bankName", bankDetailForm["Bank Name"]);
            bodyFormData.append("accountHolder", bankDetailForm["Account Holder Name"]);
            bodyFormData.append("accountNumber", bankDetailForm["Account Number"]);
            bodyFormData.append("routingNumber", bankDetailForm["Routing Number"]);
            bodyFormData.append("ssn", bankDetailForm["SSN (Last Four Digits)"]);
            bodyFormData.append("postalCode", bankDetailForm["Postal Code"]);
            bodyFormData.append("country", bankDetailForm["Country"]);
            bodyFormData.append("address1", bankDetailForm["Address Line 1"]);
            bodyFormData.append("address2", bankDetailForm["Address Line 2"]);
            bodyFormData.append("city", bankDetailForm["City"]);
            bodyFormData.append("dob", Date.parse(bankDetailForm["Date Of Birth"]));
            bodyFormData.append("email", bankDetailForm["Email"]);
            bodyFormData.append("gender", bankDetailForm["Gender"]);
            bodyFormData.append("state", bankDetailForm["State"]);
            bodyFormData.append("images", uploadedImageFile);
        }
        // console.log("Body Form Data: ", bodyFormData);
        dispatch(postFetch(bank_details_api, bodyFormData));
        // console.log("Bank Form: ", bankDetailForm);
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