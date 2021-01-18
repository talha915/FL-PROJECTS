import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import ModalPopup from './ModalPopup';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateModal } from '../../actions/updateModal';

// Style
import '../../styles/login.scss';

let dataNew;

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
                    <Form >
                        <FormGroup>
                            <Button color="info" size="lg">
                                {datacall.modalState.btnText}
                            </Button>
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
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> {loginForm.remember}
                            </Label>
                        </FormGroup>
                        <FormGroup check inline style={{ textAlign: "right" }}>
                            <Label check>
                                <a href="#" onClick={toggle}>{loginForm.forgot}</a>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button color="info" size="lg" >{loginForm.loginBtn}</Button>
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

export default LoginForm;