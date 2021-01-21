import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ModalPopup from './ModalPopup';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

// Router
import { withRouter } from 'react-router-dom';

// Style
import '../../styles/login.scss';

function LoginForm(props) {

    const [loginForm, setForm] = useState({});
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        setFormData();
    }, []);


    const setFormData = () => {
        setForm(props.formData);
    }

    const [modal, setModal] = useState(false);

    const [datacall, setDataCall] = useState({});

    const dispatch = useDispatch();

    const toggle = () => {
        //setModal(!modal);
        dispatch(updateModal('forgot'));
    }

    const modalState = useSelector(state => state.updateModal);


    const getDataFromChild = (val) => {
        callAgain(val);
    }

    const callAgain = (data) => {
        //getFormData(data);
        setDataCall(data);
    }

    const route=(data)=> {
        props.history.push(data);
    }

    const getFormData = () => {

        if (datacall.hasOwnProperty('modalState')) {
            return (
                <div className="login-form">
                    <h2 className="login-form-heading">
                        {datacall.modalState.welcomeText}
                    </h2>
                    <p className="login-form-note">
                        {datacall.modalState.heading}
                    </p>
                    <Form className="get-started-wrapper">
                        <FormGroup className="text-center">
                            <Button color="primary" size="lg">
                                {datacall.modalState.btnText}
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <div className="text-center" style={{display: "inline-block"}}>
                                <p style={{display: "inline-block"}}>{datacall.modalState.question}</p>
                                <p style={{display: "inline-block", cursor: "pointer"}} onClick={()=>route(datacall.modalState.route)}>{datacall.modalState.signIn}</p>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            )
        }

        else if (Object.keys(loginForm).length > 0) {

            return (
                <div className="login-form">
                    <h2 className="login-form-heading">
                        {loginForm.welcomeText}
                    </h2>
                    <p className="login-form-note">
                        {loginForm.loginNote}
                    </p>
                    <Form >
                        <FormGroup>
                            <Label for="exampleEmail">{loginForm.email}</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="dodgeui2020@gmail.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">{loginForm.password}</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="***************" />
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-between align-items-center mb-5" check >
                            <Label class="tunnin-checkbox" check>
                                <Input type="checkbox" /> {loginForm.remember}
                            </Label>
                            <Label check>
                                <a class="tunnin-link" href="#" onClick={toggle}>{loginForm.forgot}</a>
                            </Label>
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Button color="primary" size="lg" >{loginForm.loginBtn}</Button>
                            <p className="text-grey mt-3">Don’t have an account? <a class="tunnin-link" href="#">SIGNUP</a></p>
                        </FormGroup>
                    </Form>
                    <ModalPopup isOpen={modal} loginData={modalState} sendData={getDataFromChild} />
                </div>
            )
        }
    }

    return (
        <div>
            {getFormData()}
        </div>
    )
}

export default withRouter(LoginForm);